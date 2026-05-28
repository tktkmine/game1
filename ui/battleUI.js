/* =====================
   HP表示更新
===================== */

export function updateHpUI({

  player,

  enemy

}) {

  /* プレイヤー */

  const playerPercent =

    (player.currentHp
      / player.hp)
    * 100;

  document.getElementById(
    "player-hp-fill"
  ).style.width =
    `${playerPercent}%`;

  document.getElementById(
    "player-hp-text"
  ).textContent =

    `${player.currentHp}
     / ${player.hp}`;

  /* 敵 */

  const enemyPercent =

    (enemy.currentHp
      / enemy.hp)
    * 100;

  document.getElementById(
    "enemy-hp-fill"
  ).style.width =
    `${enemyPercent}%`;

  document.getElementById(
    "enemy-hp-text"
  ).textContent =

    `${enemy.currentHp}
     / ${enemy.hp}`;
}

/* =====================
   モンスター表示
===================== */

export function renderBattleMonsters({

  player,

  enemy

}) {

  /* プレイヤー */

  document.getElementById(
    "player-name"
  ).textContent =
    player.name;

  document.getElementById(
    "player-rank"
  ).textContent =
    `Rank:
     ${player.rank.toUpperCase()}`;

  document.getElementById(
    "player-desc"
  ).textContent =
    player.description;

  /* 敵 */

  document.getElementById(
    "enemy-name"
  ).textContent =
    enemy.name;

  document.getElementById(
    "enemy-rank"
  ).textContent =
    `Rank:
     ${enemy.rank.toUpperCase()}`;

  document.getElementById(
    "enemy-desc"
  ).textContent =
    enemy.description;
}

/* =====================
   ログ初期化
===================== */

export function clearBattleLog() {

  document.getElementById(
    "battle-log"
  ).innerHTML = "";
}

/* =====================
   ログ追加
===================== */

export function appendBattleLog(

  text

) {

  const battleLog =

    document.getElementById(
      "battle-log"
    );

  const log =
    document.createElement(
      "p"
    );

  log.textContent = text;

  battleLog.prepend(log);
}

/* =====================
   バトル画面表示
===================== */

export function showBattleScreen() {

  document.getElementById(
    "battle-screen"
  ).classList.add(
    "active"
  );
}

/* =====================
   バトル画面非表示
===================== */

export function hideBattleScreen() {

  document.getElementById(
    "battle-screen"
  ).classList.remove(
    "active"
  );
}
