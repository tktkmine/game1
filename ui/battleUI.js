/* =====================
   バトルログ
===================== */

export function setBattleLog(

  message

) {

  const battleLog =
    document.getElementById(
      "battle-log"
    );

  battleLog.innerHTML =
    message;
}

/* =====================
   HP更新
===================== */

export function updateHpBar({

  target,

  currentHp,

  maxHp

}) {

  const fill =
    document.getElementById(
      `${target}-hp-fill`
    );

  const text =
    document.getElementById(
      `${target}-hp-text`
    );

  const percent =

    Math.max(

      0,

      (currentHp / maxHp)
      * 100

    );

  fill.style.width =
    `${percent}%`;

  text.textContent =

    `HP ${currentHp} / ${maxHp}`;
}

/* =====================
   モンスター表示
===================== */

export function setMonsterInfo({

  target,

  name,

  rank

}) {

  const nameElement =
    document.getElementById(
      `${target}-name`
    );

  nameElement.textContent =
    name;

  const panel =
    nameElement.parentElement;

  const rankElement =
    panel.querySelector(
      ".monster-rank"
    );

  rankElement.textContent =
    `Rank ${rank}`;
}

/* =====================
   STOP結果表示
===================== */

export function showStopResult({

  multiplier

}) {

  setBattleLog(

    `
    STOP！
    <br>
    攻撃倍率 :
    x${multiplier}
    `
  );
}
