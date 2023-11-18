import s from "./NavigationLinks.module.scss";
import { linksHeader } from "./links";

const NavigationLinks = () => {
  return (
    <div className={s.links}>
      {linksHeader.map((link) => {
        return (
          <div className={`${s.link} ${s.floating_text}`} key={link.id}>
            {link.text}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationLinks;
