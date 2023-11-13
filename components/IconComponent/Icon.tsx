import { FC } from "react";
import s from "./Icon.module.scss";

import { Logo } from "../../public/svg/index";
type IconComponentProps = { name: string; className?: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
  logo: Logo,
};

const Icon: FC<IconComponentProps> = ({ name, className, ...props }) => {
  const classNames = [s.icon];
  className && classNames.push(className);

  let Icon = iconTypes[name];
  return !!Icon && <Icon className={classNames.join(" ")} {...props} />;
};

export default Icon;
