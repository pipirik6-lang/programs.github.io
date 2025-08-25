function applyTheme() {
  const theme = localStorage.getItem('theme') || "light";
  if (theme === "dark") {
    document.body.style.background = "#222";
    document.body.style.color = "#eee";
    document.documentElement.style.setProperty('--header-bg', '#333');
    document.documentElement.style.setProperty('--header-text', '#fff');
    document.documentElement.style.setProperty('--btn-bg', '#444');
    document.documentElement.style.setProperty('--btn-hover', '#666');
    document.documentElement.style.setProperty('--btn-text', '#fff');
  } else {
    document.body.style.background = "#fff";
    document.body.style.color = "#111";
    document.documentElement.style.setProperty('--header-bg', '#f1f1f1');
    document.documentElement.style.setProperty('--header-text', '#000');
    document.documentElement.style.setProperty('--btn-bg', '#ddd');
    document.documentElement.style.setProperty('--btn-hover', '#bbb');
    document.documentElement.style.setProperty('--btn-text', '#000');
  }
}

function applyMode() {
  const mode = localStorage.getItem('mode') || "mobile";
  if (mode === "desktop") {
    document.body.style.maxWidth = "1200px";
    document.body.style.margin = "0 auto";
  } else {
    document.body.style.maxWidth = "500px";
    document.body.style.margin = "0 auto";
  }
}

function applyLanguage() {
  const lang = localStorage.getItem('language') || "ru";

  if (document.getElementById('title')) {
    document.getElementById('title').textContent =
      (lang === "en") ? "⚙️ Settings" : "⚙️ Настройки";
  }

  if (document.getElementById('navHome')) {
    document.getElementById('navHome').textContent = (lang === "en") ? "Home" : "Главная";
    document.getElementById('navCatalog').textContent = (lang === "en") ? "Catalog" : "Каталог";
    document.getElementById('navSettings').textContent = (lang === "en") ? "Settings" : "Настройки";
    document.getElementById('navSupport').textContent = (lang === "en") ? "Support" : "Поддержка";
  }
}

function applyUser() {
  const nick = localStorage.getItem('nickname') || "Без ника";
  const avatar = localStorage.getItem('avatar');

  const previewNick = document.getElementById('previewNick');
  const previewAvatar = document.getElementById('previewAvatar');

  if (previewNick) previewNick.textContent = nick;
  if (previewAvatar) {
    if (avatar) {
      previewAvatar.src = avatar;
      previewAvatar.style.display = "block";
    } else {
      previewAvatar.style.display = "none";
    }
  }
}

function loadSettings() {
  applyTheme();
  applyMode();
  applyLanguage();
  applyUser();
}

window.onload = loadSettings;
