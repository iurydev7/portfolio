import { Monitor, CodeXml, Database, Layers } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import "./SkillCard.css";

const technologyIcons = {
  html5: SiHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  bootstrap: SiBootstrap,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
};

const categoryIcons = {
  "Front-end": Monitor,
  "Back-end": CodeXml,
  "Banco de Dados": Database,
  Ferramentas: Layers,
};

function SkillCard({ title, description, technologies }) {
  const CategoryIcon = categoryIcons[title];
  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <div className="skill-card-heading">
          {CategoryIcon && <CategoryIcon size={24} strokeWidth={1.8} aria-hidden="true" />}
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
      <div className="skill-card-technologies">
        {technologies.map((technology) => {
          const Icon = technologyIcons[technology.icon];
          return (
            <div className="skill-technology" key={technology.name}>
              {Icon && <Icon className={`technology-icon technology-icon-${technology.icon}`} aria-hidden="true" />}
              <span>{technology.name}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default SkillCard;
