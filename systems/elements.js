/* =====================
   属性相性
===================== */

export const elementAdvantage = {

  fire: "nature",

  nature: "water",

  water: "thunder",

  thunder: "earth",

  earth: "fire"
};

/* =====================
   属性有利判定
===================== */

export function isAdvantage(

  attackerElement,

  defenderElement

) {

  return (
    elementAdvantage[
      attackerElement
    ]
    ===
    defenderElement
  );
}

/* =====================
   属性倍率取得
===================== */

export function getElementMultiplier(

  attackerElement,

  defenderElement

) {

  /* 有利 */

  if (
    isAdvantage(
      attackerElement,
      defenderElement
    )
  ) {

    return 1.5;
  }

  /* 不利 */

  if (
    isAdvantage(
      defenderElement,
      attackerElement
    )
  ) {

    return 0.75;
  }

  /* 等倍 */

  return 1.0;
}
