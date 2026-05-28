/* =====================
   セーブキー
===================== */

const SAVE_KEY =
  "genkai_taisen_save";

/* =====================
   初期データ
===================== */

export function createNewSave() {

  return {

    playerName:
      "プレイヤー",

    world:
      "fire",

    gold:
      1000,

    collection: [

      "fire_c_1"

    ],

    party: [

      "fire_c_1"

    ]
  };
}

/* =====================
   セーブ
===================== */

export function saveGame(

  saveData

) {

  localStorage.setItem(

    SAVE_KEY,

    JSON.stringify(
      saveData
    )
  );
}

/* =====================
   ロード
===================== */

export function loadGame() {

  const rawData =

    localStorage.getItem(
      SAVE_KEY
    );

  /* 初回 */

  if (!rawData) {

    const newSave =
      createNewSave();

    saveGame(newSave);

    return newSave;
  }

  return JSON.parse(
    rawData
  );
}

/* =====================
   セーブ削除
===================== */

export function deleteSave() {

  localStorage.removeItem(
    SAVE_KEY
  );
}

/* =====================
   ゴールド追加
===================== */

export function addGold({

  saveData,

  amount

}) {

  saveData.gold += amount;

  saveGame(saveData);
}

/* =====================
   モンスター追加
===================== */

export function addMonster({

  saveData,

  monsterId

}) {

  /* 重複防止 */

  if (

    saveData.collection.includes(
      monsterId
    )

  ) {

    return false;
  }

  saveData.collection.push(
    monsterId
  );

  saveGame(saveData);

  return true;
}

/* =====================
   パーティ設定
===================== */

export function setParty({

  saveData,

  party

}) {

  saveData.party = party;

  saveGame(saveData);
}
