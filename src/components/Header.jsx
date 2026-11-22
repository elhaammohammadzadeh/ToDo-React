import { Check, Heart, Sun, Moon } from "lucide-react";

function Header() {
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
        <button className="theme-btn active">
          <Sun />
        </button>
        <button className="theme-btn">
          <Moon />
        </button>
      </div>
    </header>
  );
}

export default Header;
