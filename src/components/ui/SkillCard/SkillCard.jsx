import "./SkillCard.scss";

function SkillCard({ title, iconLight, iconDark }) {
  return (
    <div className="skill-card">
      <div className="skill-card__icon-wrap">
        <img
          className="skill-card__icon dark:hidden"
          src={iconLight}
          alt={`${title} logo`}
        />
        <img
          className="skill-card__icon hidden dark:block"
          src={iconDark}
          alt={`${title} logo`}
        />
      </div>
      <p className="skill-card__title">{title}</p>
    </div>
  );
}

export default SkillCard;
