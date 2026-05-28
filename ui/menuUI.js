/* =====================
   メニュー表示
===================== */

export function showMenu() {

  document.getElementById(
    "menu-screen"
  ).classList.add(
    "active"
  );
}

/* =====================
   メニュー非表示
===================== */

export function hideMenu() {

  document.getElementById(
    "menu-screen"
  ).classList.remove(
    "active"
  );
}

/* =====================
   メニューボタン初期化
===================== */

export function initializeMenu({

  onBattle,

  onGacha,

  onHome,

  onCollection

}) {

  /* =====================
     モンスターテイム
  ===================== */

  document.getElementById(
    "menu-battle"
  ).onclick = () => {

    onBattle();
  };

  /* =====================
     ガチャ
  ===================== */

  document.getElementById(
    "menu-gacha"
  ).onclick = () => {

    onGacha();
  };

  /* =====================
     マイホーム
  ===================== */

  document.getElementById(
    "menu-home"
  ).onclick = () => {

    onHome();
  };

  /* =====================
     図鑑
  ===================== */

  document.getElementById(
    "menu-collection"
  ).onclick = () => {

    onCollection();
  };
}

/* =====================
   画面切り替え
===================== */

export function hideAllScreens() {

  const screens =

    document.querySelectorAll(
      ".screen"
    );

  screens.forEach(
    (screen) => {

      screen.classList.remove(
        "active"
      );
    }
  );
}
