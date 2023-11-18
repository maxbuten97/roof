"use client";
import Header from "@/components/Header/Header";
import s from "./page.module.scss";

function Page() {
  return (
    <div className={s.MyApp}>
      <div className={s.mask}>
        <div className={s.container}>
          <div className={s.header}>
            <Header />
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default Page;
