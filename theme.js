// Переключение темы
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Создаём кнопку для смены темы
window.onload = () => {
  const btn = document.createElement("button");
  btn.innerText = "🌙 / ☀️";
  btn.style.position = "fixed";
  btn.style.top = "10px";
  btn.style.right = "10px";
  btn.style.padding = "8px 12px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "1000";
  btn.onclick = toggleTheme;
  document.body.appendChild(btn);
};
