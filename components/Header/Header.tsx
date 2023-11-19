import React, { useState } from "react";
import Icon from "../IconComponent/Icon";
import s from "./Header.module.scss";

import NavigationLinks from "../NavigationLinks/NavigationLinks";
import FormButton from "../FormButton/FormButton";
import ModalMenu from "../ModalMenu/ModalMenu";
const Header = () => {
  const [isModalHeader, setModalHeader] = useState(false);
  const onClose = () => {
    setModalHeader(false);
  };
  return (
    <div className={s.Header}>
      <nav className={s.navigation}>
        <div className={s.form_block}>
          <div className={`${s.logo} ${s.floating_text}`}>
            <Icon name="logo" />
          </div>
          <FormButton />
        </div>
        {/* Для мобилки */}
        <div className={s.burger__mob_wrap}>
          <div className={s.burger__mob} onClick={() => setModalHeader(true)}>
            <React.Fragment>
              <ModalMenu
                visible={isModalHeader}
                footer={<button onClick={onClose}>Закрыть</button>}
                onClose={onClose}
              />
            </React.Fragment>
          </div>
        </div>
        {/*  */}

        <NavigationLinks />
      </nav>
    </div>
  );
};

export default Header;
