import React from "react";
import styled from "styled-components";

const ObjectionModal = ({ isOpen, onClose, date }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <h3>{date} 이의신청</h3>
        <Textarea placeholder="이유를 작성해주세요" />
        <ButtonRow>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <SubmitButton onClick={onClose}>제출</SubmitButton>
        </ButtonRow>
      </ModalWrapper>
    </Overlay>
  );
};

export default ObjectionModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 2rem 3.5rem 2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  font-size: 0.9rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #4ea3ff;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
`;
