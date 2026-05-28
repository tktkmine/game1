import {

  loadGame,

  saveGame

}
from "./save.js";

/* =====================
   プレイヤーデータ取得
===================== */

export function getPlayerData() {

  return loadGame();
}

/* =====================
   プレイヤー名変更
===================== */

export function setPlayerName({

  playerData,

  name

}) {

  playerData.playerName =
    name;

  saveGame(playerData);
}

/* =====================
   所属世界変更
===================== */

export function setPlayerWorld({

  playerData,

  world

}) {

  playerData.world =
    world;

  saveGame(playerData);
}

/* =====================
   ゴールド取得
===================== */

export function getGold(

  playerData

) {

  return playerData.gold;
}

/* =====================
   ゴールド追加
===================== */

export function addPlayerGold({

  playerData,

  amount

}) {

  playerData.gold += amount;

  saveGame(playerData);
}

/* =====================
   ゴールド消費
===================== */

export function consumeGold({

  playerData,

  amount

}) {

  /* 不足 */

  if (

    playerData.gold
    <
    amount

  ) {

    return false;
  }

  playerData.gold -= amount;

  saveGame(playerData);

  return true;
}

/* =====================
   コレクション取得
===================== */

export function getCollection(

  playerData

) {

  return playerData.collection;
}

/* =====================
   パーティ取得
===================== */

export function getParty(

  playerData

) {

  return playerData.party;
}

/* =====================
   パーティ追加
===================== */

export function addPartyMonster({

  playerData,

  monsterId

}) {

  /* 重複 */

  if (

    playerData.party.includes(
      monsterId
    )

  ) {

    return false;
  }

  /* 最大3 */

  if (

    playerData.party.length
    >=
    3

  ) {

    return false;
  }

  playerData.party.push(
    monsterId
  );

  saveGame(playerData);

  return true;
}

/* =====================
   パーティ解除
===================== */

export function removePartyMonster({

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

  saveGame(playerData);
}
