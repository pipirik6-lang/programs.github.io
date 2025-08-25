// Загружаем профиль при входе
window.onload = function () {
  loadProfile();
  loadBackground();
  if (document.getElementById("favorites-list")) {
    loadFavorites();
  }
};

// ====== Профиль ======
function saveProfile() {
  let nick = document.getElementById("nickname").value;
  let avatar = document.getElementById("avatar-url").value;
  let status = document.getElementById("status").value;

  localStorage.setItem("nickname", nick);
  localStorage.setItem("avatar", avatar);
  localStorage.setItem("status", status);

  updateProfileHeader();
  alert("Профиль сохранён!");
}

function loadProfile() {
  updateProfileHeader();
}

function updateProfileHeader() {
  let nick = localStorage.getItem("nickname") || "Гость";
  let avatar = localStorage.getItem("avatar") || "https://i.imgur.com/6VBx3io.png";
  
  let nickSpan = document.getElementById("header-nick");
  let avatarImg = document.getElementById("header-avatar");

  if (nickSpan) nickSpan.textContent = nick;
  if (avatarImg) avatarImg.src = avatar;
}

// ====== Фон ======
function saveBackground() {
  let bg = document.getElementById("background").value;
  let custom = document.getElementById("custom-bg").value;

  localStorage.setItem("background", bg);
  if (bg === "custom") {
    localStorage.setItem("custom-bg", custom);
  }
  applyBackground();
  alert("Фон сохранён!");
}

function loadBackground() {
  applyBackground();
}

function applyBackground() {
  let bg = localStorage.getItem("background") || "light";
  let custom = localStorage.getItem("custom-bg");

  switch (bg) {
    case "light":
      document.body.style.background = "#f4f4f4";
      break;
    case "dark":
      document.body.style.background = "#1e1e1e";
      document.body.style.color = "white";
      break;
    case "minecraft":
      document.body.style.background = "url('https://i.imgur.com/OdL0XPt.png') center/cover";
      break;
    case "space":
      document.body.style.background = "url('https://i.imgur.com/9N4iFqv.jpg') center/cover";
      break;
    case "custom":
      if (custom) {
        document.body.style.background = `url('${custom}') center/cover`;
      }
      break;
  }
}

// ====== Избранное ======
function addToFavorites(program) {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favs.includes(program)) {
    favs.push(program);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert(program + " добавлен в избранное!");
  } else {
    alert("Уже в избранном!");
  }
}

function loadFavorites() {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  let list = document.getElementById("favorites-list");

  favs.forEach(fav => {
    let li = document.createElement("li");
    li.textContent = fav;
    list.appendChild(li);
  });
}
