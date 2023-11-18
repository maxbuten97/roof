"use client";
import Header from "@/components/Header/Header";
import s from "./page.module.scss";
import Footer from "@/components/Footer/Footer";

function Page() {
  return (
    <div className={s.MyApp}>
      <div className={s.mask}>
        <div className={s.container}>
          <div className={s.header}>
            <Header />
          </div>
        </div>
        <div className={s.logo_text}>
          <span className={s.roofs}>
            {" "}
            Roofs<span className={s.and}> &</span> Кровля
          </span>
        </div>
        <div className={s.products}>
          <div className={s.container}>ку</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
