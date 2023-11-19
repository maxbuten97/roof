"use client";
import Header from "@/components/Header/Header";
import s from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";

function Page() {
  return (
    <div className={s.MyApp}>
      <div className={s.mask}>
        <div className={s.container}>
          <div className={s.header}>
            <Header />
          </div>
          <main>
            <Home />
          </main>
        </div>
      </div>
      <div className={s.products}>
        <div className={s.container}>ку</div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
