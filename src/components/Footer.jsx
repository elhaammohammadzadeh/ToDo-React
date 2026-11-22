import { Trash2, Info } from "lucide-react";
function Footer({ todos, onClearAll }) {
  return (
    <footer className="footer">
      <button className="clear-btn" onClick={onClearAll}>
        <Trash2 />
        Clear Completed
      </button>
      <span className="total-badge">
        <Info />
        total tasks: {todos.length}
      </span>
    </footer>
  );
}

export default Footer;
