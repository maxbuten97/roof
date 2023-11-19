import WordCarousel from "shared/UI-kit/WordCarousel/WordCarousel";
import s from "./Home.module.scss";

const Home: React.FC = () => {
  const words = ["Надежное", "Лучшее", "Качественное"];
  return (
    <div>
      <div className={s.content}>
        <h1 className={`${s.slogan} ${s.floating_text}`}>
          <WordCarousel words={words} />
          решение для вашей кровли
        </h1>
      </div>
      <div className={s.logo_text}>
        <span className={s.roofs}>
          {" "}
          Roofs<span className={s.and}> &</span> Кровля
        </span>
      </div>
    </div>
  );
};

export default Home;
