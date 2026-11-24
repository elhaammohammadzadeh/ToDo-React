import { Check, Heart, Sun, Moon } from "lucide-react";

function Header({ theme, onThemeChange }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">
          <Check />
        </div>
        <div>
          <h1 className="title">
            Todo <span>App</span>
          </h1>
          <p className="subtitle">
            Plan. Do. Done! <Heart className="heart" />
          </p>
        </div>
      </div>
      <div className="theme-toggle">
        <button
          type="button"
          className={`theme-btn ${theme === "light" ? "active" : ""}`}
          onClick={() => onThemeChange("light")}
          aria-label="Light theme"
          aria-pressed={theme === "light"}
          title="Light theme"
        >
          <Sun />
        </button>
        <button
          type="button"
          className={`theme-btn ${theme === "dark" ? "active" : ""}`}
          onClick={() => onThemeChange("dark")}
          aria-label="Dark theme"
          aria-pressed={theme === "dark"}
          title="Dark theme"
        >
          <Moon />
        </button>
      </div>
    </header>
  );
}

export default Header;
