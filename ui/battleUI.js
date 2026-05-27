/* =====================
   ログ表示
===================== */

export function addLog(

  battleLog,

  text

) {

  battleLog.innerHTML += `
    <p>${text}</p>
  `;

  battleLog.scrollTop =
    battleLog.scrollHeight;
}

/* =====================
   HP更新
===================== */

export function updateHPBar({

  target,

  hpTextId,

  hpFillId

}) {

  const hpText =
    document.getElementById(
      hpTextId
    );

  const hpFill =
    document.getElementById(
      hpFillId
    );

  /* テキスト */

  hpText.textContent =
    `HP: ${target.hp} / ${target.maxHp}`;

  /* バー */

  const percent =
    (
      target.hp /
      target.maxHp
    ) * 100;

  hpFill.style.width =
    `${percent}%`;
}

/* =====================
   モンスター表示
===================== */

export function updateMonsterInfo({

  monster,

  nameId,

  rankId,

  descId

}) {

  document.getElementById(
    nameId
  ).textContent =
    monster.name;

  document.getElementById(
    rankId
  ).textContent =
    monster.rank;

  document.getElementById(
    descId
  ).textContent =
    monster.description;
}

/* =====================
   勝敗表示
===================== */

export function showResult(

  isWin,

  battleLog

) {

  if (isWin) {

    addLog(
      battleLog,
      "勝利！"
    );

    return;
  }

  addLog(
    battleLog,
    "敗北..."
  );
}
