import React from "react";
import styled from "styled-components";

const WeeklyShiftSummary = ({ weeklyData }) => {
  return (
    <WeekList>
      {weeklyData.map((d, i) => (
        <DayCard key={i} active={d.start !== ""}>
          <DayName isSunday={i === 0} isSaturday={i === 6}>
            {d.day}
          </DayName>
          <TimeText>
            {d.start && d.end ? `${d.start}\n${d.end}` : "일정\n없음"}
          </TimeText>
        </DayCard>
      ))}
    </WeekList>
  );
};

export default WeeklyShiftSummary;

const WeekList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 0.3rem;
`;

const DayCard = styled.div`
  background-color: ${({ active }) => (active ? "#dceeff" : "#eaf0f6")};
  border-radius: 12px;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DayName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 1rem;
  color: ${({ isSunday, isSaturday }) =>
    isSunday ? "red" : isSaturday ? "#2f5fd7" : "#444"};
`;

const TimeText = styled.p`
  font-size: 0.85rem;
  white-space: pre-line;
  margin: 0;
`;