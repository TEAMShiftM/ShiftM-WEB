// ShiftUpdate.jsx
import React, { useState } from "react";
import styled from "styled-components";

const ShiftUpdate = () => {
  const [record] = useState("김사원의 2025년 3월 1일 출근 기록");
  const [type, setType] = useState("checkIn");
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ type, hour, minute });
    // 실제 제출 로직 추가
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>근무 기록 수정</Title>
        <Label>수정 대상 *</Label>
        <ReadOnlyInput type="text" value={record} readOnly />

        <Label>수정 시간*</Label>
        <TimeRow>
          <TypeSelector value={type} onChange={(e) => setType(e.target.value)}>
            <option value="checkIn">수정/삭제</option>
            <option value="checkOut">퇴근</option>
          </TypeSelector>
          <TimeInput
            type="number"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            min="0"
            max="23"
          />
          <span>시</span>
          <TimeInput
            type="number"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            min="0"
            max="59"
          />
          <span>분</span>
        </TimeRow>

        <SubmitButton onClick={handleSubmit}>수정</SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

export default ShiftUpdate;

// styled-components
const Wrapper = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #444;
`;

const ReadOnlyInput = styled.input`
  border: 1px solid #a3c9ff;
  border-radius: 8px;
  padding: 0.8rem;
  background-color: #f3f3f3;
  color: #444;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TypeSelector = styled.select`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #4ea3ff;
  color: #4ea3ff;
  background: white;
  font-size: 0.9rem;
`;

const TimeInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #a3c9ff;
  text-align: center;
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  background-color: #4ea3ff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
