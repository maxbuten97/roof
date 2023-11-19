import React from "react";
import s from "./FormButton.module.scss";
import { Button, Input, Modal, Text } from "@nextui-org/react";
const FormButton = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <div className={s.block_btn}>
        <Button
          className={`${s.form_button} ${s.floating_text}`}
          css={{
            maxWidth: "15%",
            backgroundColor: "#d4ddb3",
            color: "#000",
          }}
          onPress={handler}
        >
          Оставить заявку
        </Button>
      </div>
      <Modal
        aria-labelledby="modal-title"
        width="40%"
        open={visible}
        onClose={closeHandler}
        css={{ padding: "$13", backgroundColor: "#b7be9a" }}
      >
        <Modal.Header className={s.modal_header}>
          <Text id="modal-title" size={30}>
            Оставьте заявку на получение индивидуальной цены
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="default"
            size="xl"
            placeholder="Почта"
            css={{ width: "90%", margin: "10px auto" }}
          />

          <Input
            className={s.input}
            clearable
            bordered
            fullWidth
            color="default"
            size="xl"
            type="email"
            placeholder="Телефон"
            css={{ width: "90%", margin: "10px auto" }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="default"
            size="xl"
            type="tel"
            placeholder="Ваше имя"
            css={{ width: "90%", margin: "10px auto" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="lg"
            css={{
              width: "90%",
              margin: "10px auto",
              backgroundColor: "#4d4d4d",
              color: "#d4ddb3",
            }}
            onPress={closeHandler}
          >
            Отправить заявку
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormButton;
