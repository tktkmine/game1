const menuScene =
document.getElementById("menuScene");

const gameScene =
document.getElementById("gameScene");

let floor;
let player;
let inventory;
let enemy;

let currentChoices = [];

const enemyNames = [
"スライム",
"ゴブリン",
"オーク",
"骸骨兵",
"ドラゴン"
];

showMenu();

function showMenu(){

menuScene.style.display = "flex";

gameScene.style.display = "none";
}

function showGame(){

menuScene.style.display = "none";

gameScene.style.display = "flex";
}

function startGame(){

floor = 1;

player = {

maxHp:30,
hp:30,

atk:10,
def:0,
crit:10
};

inventory = {

potion:1,
bomb:1
};

currentChoices = [];

document.getElementById("resultArea")
.style.display = "none";

document.getElementById("choiceArea")
.style.display = "none";

document.getElementById("attackBtn")
.style.display = "block";

document.getElementById("itemBtn")
.style.display = "block";

closeItemArea();

createEnemy();

document.getElementById("log")
.innerHTML =
"ダンジョンへ潜入した。";

showGame();
}

function returnToMenu(){

showMenu();
}

function toggleItems(){

const area =
document.getElementById("itemArea");

const attackBtn =
document.getElementById("attackBtn");

const itemBtn =
document.getElementById("itemBtn");

if(area.style.display === "none"){

area.style.display = "block";

attackBtn.style.display = "none";

itemBtn.style.display = "none";
}
else{

closeItemArea();
}
}

function closeItemArea(){

document.getElementById("itemArea")
.style.display = "none";

document.getElementById("attackBtn")
.style.display = "block";

document.getElementById("itemBtn")
.style.display = "block";
}

function createEnemy(){

enemy = {

name:
enemyNames[
Math.floor(
Math.random()
* enemyNames.length
)
],

maxHp:20 + floor * 5,
hp:20 + floor * 5,

atk:3 + floor,
def:Math.floor(floor/5),
crit:5 + Math.floor(floor/3)
};

updateUI();
drawSprites();
}

function updateUI(){

document.getElementById("floor")
.innerText =
floor + "階層";

document.getElementById("playerStats")
.innerHTML =
`
HP ${player.hp}/${player.maxHp}<br>
ATK ${player.atk}<br>
DEF ${player.def}<br>
CRT ${player.crit}%
`;

document.getElementById("enemyName")
.innerText =
enemy.name;

document.getElementById("enemyStats")
.innerHTML =
`
HP ${enemy.hp}/${enemy.maxHp}<br>
ATK ${enemy.atk}<br>
DEF ${enemy.def}<br>
CRT ${enemy.crit}%
`;

document.getElementById("inventory")
.innerHTML =
`
回復薬 ×${inventory.potion}<br>
爆薬 ×${inventory.bomb}
`;
}

function attack(){

let damage =
Math.max(
1,
player.atk - enemy.def
);

enemy.hp -= damage;

if(enemy.hp <= 0){

enemy.hp = 0;

updateUI();

showChoices();

document.getElementById("log")
.innerHTML =
`${enemy.name}撃破`;

return;
}

player.hp -= Math.max(
1,
enemy.atk - player.def
);

if(player.hp <= 0){

player.hp = 0;

updateUI();

document.getElementById("log")
.innerHTML =
"GAME OVER";

document.getElementById("resultArea")
.style.display = "block";

return;
}

updateUI();

document.getElementById("log")
.innerHTML =
`${damage}ダメージ`;
}

function usePotion(){

if(inventory.potion <= 0){

document.getElementById("log")
.innerHTML =
"回復薬がない";

return;
}

inventory.potion--;

player.hp += 20;

if(player.hp > player.maxHp){

player.hp =
player.maxHp;
}

updateUI();

closeItemArea();

document.getElementById("log")
.innerHTML =
"HP20回復";
}

function useBomb(){

if(inventory.bomb <= 0){

document.getElementById("log")
.innerHTML =
"爆薬がない";

return;
}

inventory.bomb--;

enemy.hp -= 20;

if(enemy.hp < 0){
enemy.hp = 0;
}

updateUI();

closeItemArea();

document.getElementById("log")
.innerHTML =
"爆薬使用";
}

function showChoices(){

const area =
document.getElementById("choiceArea");

area.style.display =
"block";

area.innerHTML =
`
<button onclick="nextFloor()">
次へ進む
</button>
`;
}

function nextFloor(){

currentChoices = [];

floor++;

document.getElementById("choiceArea")
.style.display = "none";

createEnemy();

updateUI();
}

function drawSprites(){

document.getElementById("playerSprite")
.innerHTML = `
<div class="sprite">

<svg viewBox="0 0 64 64">

<rect x="24" y="4"
width="16"
height="8"
fill="#663300"/>

<rect x="20" y="12"
width="24"
height="20"
fill="#ffcc99"/>

<rect x="18" y="32"
width="28"
height="24"
fill="#2244aa"/>

</svg>

</div>
`;

document.getElementById("enemySprite")
.innerHTML = `
<div class="sprite">

<svg viewBox="0 0 64 64">

<rect x="18" y="10"
width="28"
height="18"
fill="#33cc33"/>

<rect x="16" y="30"
width="32"
height="22"
fill="#33cc33"/>

</svg>

</div>
`;
}
