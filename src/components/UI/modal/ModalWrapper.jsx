import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Перейти на страницу?</h2>
        <p>Вы уверены, что хотите перейти на страницу пользователей?</p>
        <div style={{ marginTop: "20px" }}>
          <button onClick={onConfirm} style={{ marginRight: "10px" }}>
            Да
          </button>
          <button onClick={onClose}>Нет</button>
        </div>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("portal-root")
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;
