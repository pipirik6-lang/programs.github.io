// ========== Настройки ==========
function saveSettings() {
  let nick = document.getElementById("nickname").value;
  let lang = document.getElementById("languageSelect").value;
  let mode = document.getElementById("deviceMode").value;

  localStorage.setItem("nickname", nick);
  localStorage.setItem("language", lang);
  localStorage.setItem("deviceMode", mode);

  alert("Настройки сохранены!");
}

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

// при загрузке применяем сохранённые настройки
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
  let nick = localStorage.getItem("nickname");
  if (nick && document.getElementById("profileName")) {
    document.getElementById("profileName").textContent = nick;
  }

  let avatar = localStorage.getItem("avatar");
  if (avatar && document.getElementById("profileAvatar")) {
    document.getElementById("profileAvatar").src = avatar;
  }
};

// Загрузка аватара
document.addEventListener("change", e => {
  if (e.target.id === "avatarUpload") {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(ev) {
      localStorage.setItem("avatar", ev.target.result);
    };
    reader.readAsDataURL(file);
  }
});

// ========== Отзывы ==========
function addReview() {
  let text = document.getElementById("reviewText").value;
  if (!text) return;
  let reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
  reviews.push(text);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  loadReviews();
}

function loadReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
  let container = document.getElementById("reviewsList");
  if (container) {
    container.innerHTML = reviews.map(r => `<p>💬 ${r}</p>`).join("");
  }
}
if (document.getElementById("reviewsList")) loadReviews();
