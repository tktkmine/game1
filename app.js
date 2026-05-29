/* =====================
   要素取得
===================== */

const screens = {

  title:
    document.getElementById(
      "title-screen"
    ),

  menu:
    document.getElementById(
      "menu-screen"
    ),

  tame:
    document.getElementById(
      "tame-screen"
    ),

  territory:
    document.getElementById(
      "territory-screen"
    ),

  training:
    document.getElementById(
      "training-screen"
    ),

  home:
    document.getElementById(
      "home-screen"
    )
};

/* =====================
   画面切り替え
===================== */

function hideAllScreens() {

  Object.values(screens)
    .forEach(screen => {

      screen.classList.remove(
        "active"
      );
    });
}

function showScreen(screen) {

  hideAllScreens();

  screen.classList.add(
    "active"
  );
}

/* =====================
   タイトル
===================== */

const startBtn =
  document.getElementById(
    "start-btn"
  );

startBtn.onclick = () => {

  showScreen(
    screens.menu
  );
};

/* =====================
   メニュー
===================== */

document.getElementById(
  "menu-tame"
).onclick = () => {

  showScreen(
    screens.tame
  );
};

document.getElementById(
  "menu-territory"
).onclick = () => {

  showScreen(
    screens.territory
  );
};

document.getElementById(
  "menu-training"
).onclick = () => {

  showScreen(
    screens.training
  );
};

document.getElementById(
  "menu-home"
).onclick = () => {

  showScreen(
    screens.home
  );
};

/* =====================
   戻るボタン
===================== */

const backButtons =
  document.querySelectorAll(
    ".back-btn"
  );

backButtons.forEach(button => {

  button.onclick = () => {

    showScreen(
      screens.menu
    );
  };
});

/* =====================
   タイトル演出
===================== */

const gameTitle =
  document.querySelector(
    ".game-title"
  );

gameTitle.animate(

  [

    {
      transform:
        "scale(1)"
    },

    {
      transform:
        "scale(1.05)"
    },

    {
      transform:
        "scale(1)"
    }

  ],

  {

    duration: 2000,

    iterations:
      Infinity

  }
);
