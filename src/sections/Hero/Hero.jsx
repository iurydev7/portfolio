import { ArrowUpRight, Mail } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-label">Desenvolvedor Full Stack</span>
        <h1 className="hero-title">Olá, eu sou <span>Iury.</span></h1>
        <h2 className="hero-subtitle">
          Transformo ideias em soluções digitais com tecnologia, design e propósito.
        </h2>
        <p className="hero-description">
          Desenvolvedor Full Stack Júnior, apaixonado por criar aplicações web modernas,
          funcionais e que geram valor real para pessoas e negócios.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary hero-button-primary">
            Ver projetos <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-outline-primary hero-button-outline">
            <Mail size={18} strokeWidth={1.8} aria-hidden="true" /> Entre em contato
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-frame">
          <div className="hero-image-placeholder">
            <span>IT</span>
            <p>Sua fotografia em breve</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
