import { skills } from "../../data/skills";
import SkillCard from "../../components/SkillCard/SkillCard";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-heading">
        <span className="skills-label">Tecnologias e habilidades</span>
        <h2 className="skills-title">Minhas <span>tecnologias.</span></h2>
        <p>Ferramentas e tecnologias que utilizo no desenvolvimento de soluções web, do front-end ao back-end.</p>
      </div>
      <div className="skills-grid">
        {skills.map((category) => (
          <SkillCard
            key={category.id}
            title={category.title}
            description={category.description}
            technologies={category.technologies}
          />
        ))}
      </div>
    </section>
  );
}
export default Skills;
