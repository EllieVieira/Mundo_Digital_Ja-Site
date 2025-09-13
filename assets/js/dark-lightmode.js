const logo = document.querySelector(".logo img"); // pega a logo
const html = document.documentElement;
const themeIcon = document.getElementById("theme-toggle");

// Função para atualizar a logo conforme o tema
function updateLogo() {
  if (html.getAttribute("data-theme") === "dark") {
    logo.src = "assets/img/logo-escura.png"; // versão para fundo escuro
  } else {
    logo.src = "assets/img/logo-clara.png"; // versão para fundo claro
  }
}

// Função para atualizar o ícone do botão
function updateIcon() {
  if (html.getAttribute("data-theme") === "dark") {
    themeIcon.className = "bi bi-sun"; // ícone sol
  } else {
    themeIcon.className = "bi bi-moon-stars"; // ícone lua
  }
}

// Função de alternância de tema
const toggleTheme = () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); // salva no localStorage
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); // salva no localStorage
  }
  updateLogo();
  updateIcon();
};

// Evento no botão
if (themeIcon) {
  themeIcon.addEventListener("click", toggleTheme);
}

// Ao carregar a página, aplicar o tema salvo
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);

  updateLogo();
  updateIcon();
});
