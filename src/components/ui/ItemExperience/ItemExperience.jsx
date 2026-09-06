import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { Trans } from "react-i18next";

import "./ItemExperience.scss";

function ItemExperience({ period, title, subtitle, description, isSchool }) {
  const Icon = isSchool ? MdOutlineSchool : MdOutlineWorkOutline;

  return (
    <li className="item-experience">
      <span className="item-experience__dot">
        <Icon />
      </span>

      <p className="item-experience__period">{period}</p>

      <h3 className="item-experience__title">
        {title}
        <span className="item-experience__subtitle">{subtitle}</span>
      </h3>

      <p className="item-experience__description">
        <Trans
          i18nKey={description}
          components={{
            strong: <strong className="item-experience__emphasis" />,
          }}
        />
      </p>
    </li>
  );
}

export default ItemExperience;
