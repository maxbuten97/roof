import Icon from "../IconComponent/Icon";
import s from "./Header.module.scss";
const Header = () => {
  interface ILinksHeader {
    id: string;
    text: string;
    src: string;
  }

  const linksHeader: ILinksHeader[] = [
    { id: "1", text: "Что мы предлагаем?", src: "/" },
    { id: "2", text: "Примеры работ", src: "/" },
    { id: "3", text: "Преимущества", src: "/" },
    { id: "4", text: "Материал", src: "/" },
    { id: "5", text: "Товары", src: "/" },
    { id: "6", text: "Отзывы", src: "/" },
    { id: "7", text: "Контакты", src: "/" },
  ];
  return (
    <div className={s.Header}>
      <nav className={s.navigation}>
        <div className={s.logo}>
          <Icon name="logo" />
        </div>
        <div className={s.links}>
          {linksHeader.map((link) => {
            return (
              <div className={s.link} key={link.id}>
                {link.text}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Header;
