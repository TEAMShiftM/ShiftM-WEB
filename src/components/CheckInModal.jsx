import React from "react";
import styled from "styled-components";

const CheckInModal = ({ isOpen, onClose, onConfirm, isLocationMatch }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {!isLocationMatch && (
          <WarningText>현재 위치와 출근 위치가 다릅니다.</WarningText>
        )}
        <ImagePlaceholder />
        <ModalButton onClick={onConfirm}>출근 요청</ModalButton>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default CheckInModal;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #f5f9ff;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative; /* 닫기 버튼 위치 위해 필요 */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const WarningText = styled.p`
  color: #ff4444;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ccc;
  margin-bottom: 1.5rem;
  border-radius: 12px;
`;

const ModalButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #4ea3ff;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
`;
