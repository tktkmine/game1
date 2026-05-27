/* =====================
   最大編成数
===================== */

const MAX_PARTY = 3;

/* =====================
   編成取得
===================== */

export function getParty(

  playerData

) {

  return playerData.party;
}

/* =====================
   編成追加
===================== */

export function addToParty({

  playerData,

  monsterId

}) {

  /* 最大数 */

  if (
    playerData.party.length
    >=
    MAX_PARTY
  ) {

    return {

      success: false,

      message:
        "これ以上編成できない"
    };
  }

  /* 重複 */

  if (
    playerData.party.includes(
      monsterId
    )
  ) {

    return {

      success: false,

      message:
        "既に編成済み"
    };
  }

  /* 追加 */

  playerData.party.push(
    monsterId
  );

  return {

    success: true
  };
}

/* =====================
   編成解除
===================== */

export function removeFromParty({

  playerData,

  monsterId

}) {

  playerData.party =

    playerData.party.filter(
      (id) => {

        return (
          id !== monsterId
        );
      }
    );

  return {

    success: true
  };
}

/* =====================
   編成チェック
===================== */

export function isInParty({

  playerData,

  monsterId

}) {

  return playerData.party
    .includes(monsterId);
}

/* =====================
   編成リセット
===================== */

export function clearParty(

  playerData

) {

  playerData.party = [];
}
