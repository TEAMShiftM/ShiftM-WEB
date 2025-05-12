import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ObjectionModal from "./ObjectionModal"; // 모달 컴포넌트 불러오기

const ShiftCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleRightClick = (e, date) => {
    e.preventDefault(); // 기본 우클릭 메뉴 막기
    setSelectedDate(date.toISOString().slice(0, 10));
    setIsModalOpen(true);
  };

  return (
    <CalendarContainer>
      <HeaderRow>
        <Title>홍길동</Title>
        <MonthTitle>Jan, 2025</MonthTitle>
      </HeaderRow>

      <StyledCalendar
        tileContent={({ date }) => {
          const formattedDate = date.toISOString().slice(0, 10);
          const specialData = shiftData.find((d) => d.date === formattedDate);
          const isLate = specialData?.type === "지각/조퇴";

          return (
            <TileWrapper onContextMenu={(e) => handleRightClick(e, date)}>
              {specialData ? (
                specialData.type === "휴가" ? (
                  <VacationTag>휴가</VacationTag>
                ) : (
                  <TimeBox>
                    <TimeText late={isLate}>{specialData.start}</TimeText>
                    <TimeText late={isLate}>{specialData.end}</TimeText>
                  </TimeBox>
                )
              ) : null}
            </TileWrapper>
          );
        }}
      />

      <ObjectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={selectedDate}
      />
    </CalendarContainer>
  );
};

export default ShiftCalendar;

const shiftData = [
  { date: "2025-01-03", start: "09:00", end: "18:00", type: "정상" },
  { date: "2025-01-04", start: "08:58", end: "18:03", type: "정상" },
  { date: "2025-01-05", start: "09:03", end: "17:58", type: "지각/조퇴" },
  { date: "2025-01-06", start: "09:12", end: "17:30", type: "지각/조퇴" },
  { date: "2025-01-07", type: "휴가" },
];

const CalendarContainer = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
  padding: 2rem;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

const MonthTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  background: white;
  border: none;
  font-family: sans-serif;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  .react-calendar__tile {
    height: 80px;
    vertical-align: top;
    padding: 0.5rem;
  }

  .react-calendar__tile--now {
    background: none;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #555;
  }
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  gap: 2px;
`;

const TimeText = styled.div`
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 600;
  background-color: ${(props) => (props.late ? "#FCF5EA" : "#EAF3FE")};
  color: ${(props) => (props.late ? "#FF9F2D" : "#0085FF")};
`;

const VacationTag = styled.div`
  background-color: #EBF8EC;
  color: #73C66E;
  font-size: 0.75rem;
  padding: 4px 6px;
  border-radius: 6px;
  margin-top: 0.5rem;
  text-align: center;
`;

const TileWrapper = styled.div`
  height: 100%;
  width: 100%;
`;