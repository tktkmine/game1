export function initializeTitle({ onStart }) {
  const btn = document.getElementById("start-btn");

  if (!btn) {
    console.error("start-btn が見つからない");
    return;
  }

  btn.onclick = () => {
    onStart();
  };
}

/* =====================
   タイトル演出
===================== */

export function playTitleEffect() {
  const title = document.getElementById("game-title");

  if (!title) return;

  title.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 2000,
      iterations: Infinity
    }
  );
}

/* =====================
   画面制御（互換用）
===================== */

export function showTitle() {
  const screen = document.getElementById("title-screen");
  if (screen) screen.classList.add("active");
}

export function hideTitle() {
  const screen = document.getElementById("title-screen");
  if (screen) screen.classList.remove("active");
}
