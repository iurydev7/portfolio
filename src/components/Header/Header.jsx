import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { CodeXml } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="container header-container" aria-label="Navegação principal">
        <a href="#home" className="header-logo">
          <CodeXml size={25} strokeWidth={1.8} aria-hidden="true" />
          <span className="header-logo-text">iury<span>.dev</span></span>
        </a>
        <div className="header-actions">
          <div className="header-links">
            <a href="#about">Sobre</a>
            <a href="#skills">Tecnologias</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contatos</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
export default Header;
