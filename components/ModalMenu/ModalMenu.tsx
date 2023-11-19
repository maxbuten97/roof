import React, { ReactElement } from "react";
import "./ModalMenu.css";
// интерфейс для пропсов
interface ModalPropsHeader {
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const ModalMenu = ({
  visible = false,
  footer = "",
  onClose,
}: ModalPropsHeader) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className="modal_modal_header" onClick={onClose}>
      <div
        className="modal-dialog_modal_header"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header_modal_header">
          <span className="modal-close" onClick={onClose}>
            x
          </span>
        </div>
        <div className="container_modal_header">
          <div className="modal-body_modal_header">
            <div className="modal-content_modal_header">
              <div className="adress_modal_header"></div>

              <div className="info_modal_header">
                <div className="info__block_modal_header">
                  <div className="adress_modal_header"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
