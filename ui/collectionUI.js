/* =====================
   コレクション表示
===================== */

export function renderCollection({

  containerId,

  monsters

}) {

  const container =
    document.getElementById(
      containerId
    );

  /* 初期化 */

  container.innerHTML = "";

  /* =====================
     モンスター描画
  ===================== */

  monsters.forEach((monster) => {

    const card =
      document.createElement("div");

    card.className =
      "monster-card";

    card.innerHTML = `

      <div class="monster-rank">
        ${monster.rank}
      </div>

      <h3>
        ${monster.name}
      </h3>

      <p>
        ${monster.world}
      </p>

      <p>
        ${monster.description}
      </p>

    `;

    container.appendChild(card);
  });
}

/* =====================
   属性フィルター
===================== */

export function filterByElement({

  monsters,

  element

}) {

  /* ALL */

  if (element === "all") {

    return monsters;
  }

  return monsters.filter(
    (monster) => {

      return (
        monster.element
        ===
        element
      );
    }
  );
}

/* =====================
   ランクフィルター
===================== */

export function filterByRank({

  monsters,

  rank

}) {

  /* ALL */

  if (rank === "all") {

    return monsters;
  }

  return monsters.filter(
    (monster) => {

      return (
        monster.rank
        ===
        rank
      );
    }
  );
}
