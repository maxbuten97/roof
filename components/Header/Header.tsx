import React from "react";
import Icon from "../IconComponent/Icon";
import s from "./Header.module.scss";
import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
const Header = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
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
        <div className={s.form_block}>
          <div className={s.logo}>
            <Icon name="logo" />
          </div>
          <Button
            className={s.form_button}
            css={{
              maxWidth: "15%",
              backgroundColor: "#d4ddb3",
              color: "#000",
            }}
            onPress={handler}
          >
            Оставить заявку
          </Button>
          <Modal
            aria-labelledby="modal-title"
            width="40%"
            open={visible}
            onClose={closeHandler}
            css={{ padding: "$15", backgroundColor: "#798357" }}
          >
            <Modal.Header className={s.modal_header}>
              <Text id="modal-title" size={30}>
                Оставьте заявку на получение инвестиций
                <Text b size={15}>
                  Наши специалисты помогут вам оценить ваш проект
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="xl"
                placeholder="Имя"
                css={{ width: "90%", margin: "10px auto" }}
              />

              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="xl"
                placeholder="Телефон"
                css={{ width: "90%", margin: "10px auto" }}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="xl"
                placeholder="Название проекта"
                css={{ width: "90%", margin: "10px auto" }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                size="lg"
                css={{ width: "90%", margin: "10px auto" }}
                onPress={closeHandler}
              >
                Отправить
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className={s.links}>
          {linksHeader.map((link) => {
            return (
              <div className={`${s.link} ${s.floating_text}`} key={link.id}>
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
