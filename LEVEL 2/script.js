const themes = [
  {
    name: "Midnight Obsidian",
    bg: "#0f172a",
    text: "#f8fafc",
    muted: "#94a3b8",
    accent: "#38bdf8",
    btnBg: "#38bdf8",
    btnText: "#0f172a",
    cardBg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.12)"
  },
  {
    name: "Cyberpunk Violet",
    bg: "#180d2b",
    text: "#fdf4ff",
    muted: "#d8b4fe",
    accent: "#f43f5e",
    btnBg: "#f43f5e",
    btnText: "#ffffff",
    cardBg: "rgba(255, 255, 255, 0.06)",
    border: "rgba(244, 63, 94, 0.25)"
  },
  {
    name: "Emerald Forest",
    bg: "#06281e",
    text: "#ecfdf5",
    muted: "#a7f3d0",
    accent: "#34d399",
    btnBg: "#34d399",
    btnText: "#022c22",
    cardBg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(52, 211, 153, 0.2)"
  },
  {
    name: "Sunset Ember",
    bg: "#2b1009",
    text: "#fff7ed",
    muted: "#fed7aa",
    accent: "#fb923c",
    btnBg: "#fb923c",
    btnText: "#431407",
    cardBg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(251, 146, 60, 0.25)"
  },
  {
    name: "Nordic Minimalist (Light)",
    bg: "#f8fafc",
    text: "#0f172a",
    muted: "#64748b",
    accent: "#2563eb",
    btnBg: "#2563eb",
    btnText: "#ffffff",
    cardBg: "rgba(0, 0, 0, 0.04)",
    border: "rgba(0, 0, 0, 0.08)"
  }
];

let currentIndex = 0;
const button = document.getElementById("themeToggleBtn");
const colorNameDisplay = document.getElementById("colorName");
const hexCodeDisplay = document.getElementById("hexCode");
const root = document.documentElement;
function applyTheme(theme) {
  root.style.setProperty("--bg-color", theme.bg);
  root.style.setProperty("--text-main", theme.text);
  root.style.setProperty("--text-muted", theme.muted);
  root.style.setProperty("--accent-color", theme.accent);
  root.style.setProperty("--btn-bg", theme.btnBg);
  root.style.setProperty("--btn-text", theme.btnText);
  root.style.setProperty("--card-bg", theme.cardBg);
  root.style.setProperty("--card-border", theme.border);
  colorNameDisplay.textContent = theme.name;
  hexCodeDisplay.textContent = theme.bg;
}
button.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % themes.length;
  const selectedTheme = themes[currentIndex];
  applyTheme(selectedTheme);
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "";
  }, 150);
});