/* =====================
   ホーム描画
===================== */

export function renderHome({

  playerData,

  partyMonsters

}) {

  /* プレイヤー情報 */

  document.getElementById(
    "home-player-name"
  ).textContent =

    `名前:
     ${playerData.playerName}`;

  document.getElementById(
    "home-player-world"
  ).textContent =

    `所属世界:
     ${playerData.world}`;

  document.getElementById(
    "home-player-gold"
  ).textContent =

    `所持ゴールド:
     ${playerData.gold}G`;

  /* パーティ */

  const container =

    document.getElementById(
      "party-container"
    );

  container.innerHTML = "";

  partyMonsters.forEach(
    (monster) => {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "party-card";

      card.innerHTML = `

        <div class="monster-rank">

          ${monster.rank.toUpperCase()}

        </div>

        <h3>

          ${monster.name}

        </h3>

        <p>

          ${monster.world}

        </p>

        <p>

          HP:
          ${monster.hp}

          / ATK:
          ${monster.atk}
        </p>

        <p>

          DEF:
          ${monster.def}

          / SPD:
          ${monster.spd}
        </p>

      `;

      container.appendChild(
        card
      );
    }
  );
}

/* =====================
   ホーム表示
===================== */

export function showHomeScreen() {

  document.getElementById(
    "home-screen"
  ).classList.add(
    "active"
  );
}

/* =====================
   ホーム非表示
===================== */

export function hideHomeScreen() {

  document.getElementById(
    "home-screen"
  ).classList.remove(
      "active"
    );
}
