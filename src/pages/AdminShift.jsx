// pages/AdminShifts.jsx
import React from "react";
import styled from "styled-components";

const AdminShifts = () => {
  const weeklyData = [
    { day: "일", start: "", end: "" },
    { day: "월", start: "09:00", end: "18:00" },
    { day: "화", start: "09:00", end: "18:00" },
    { day: "수", start: "09:00", end: "18:00" },
    { day: "목", start: "09:00", end: "18:00" },
    { day: "금", start: "09:00", end: "18:00" },
    { day: "토", start: "", end: "" },
  ];

  const totalHours = 40;
  const maxHours = 52;

  return (
    <PageWrapper>
      <HeaderRow>
        <DateText>2025년 2월 3일 월요일</DateText>
        <ExcelButton>엑셀 파일 변환</ExcelButton>
      </HeaderRow>

      <Card>
        <CardTitle>오늘 근무</CardTitle>
        <StatsRow>
          <StatBlock>
            <StatLabel>출근 / 퇴근</StatLabel>
            <StatValue>50 / 0</StatValue>
          </StatBlock>
          <StatBlock>
            <StatLabel>지각 / 조퇴</StatLabel>
            <StatValue>0 / 0</StatValue>
          </StatBlock>
          <StatBlock>
            <StatLabel>결근</StatLabel>
            <StatValue>0</StatValue>
          </StatBlock>
        </StatsRow>
      </Card>

      <Card>
        <CardTitle>이번주 근무 평균</CardTitle>
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
        <ProgressBarContainer>
          <ProgressBarFill width={(totalHours / maxHours) * 100 + "%"} />
          <BarTextLeft>0시간</BarTextLeft>
          <BarTextRight>{maxHours}시간</BarTextRight>
        </ProgressBarContainer>
      </Card>
    </PageWrapper>
  );
};

export default AdminShifts;

const PageWrapper = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  max-width: 1080px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DateText = styled.h2`
  font-size: 1.1rem;
  color: #333;
`;

const ExcelButton = styled.button`
  border: 1px solid #4ea3ff;
  background: white;
  color: #4ea3ff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const StatBlock = styled.div``;

const StatLabel = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;

const WeekList = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: ${({ isSunday, isSaturday }) =>
    isSunday ? "red" : isSaturday ? "#2f5fd7" : "#444"};
`;

const TimeText = styled.p`
  font-size: 0.85rem;
  white-space: pre-line;
`;

const ProgressBarContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  height: 18px;
  background: #e0ecf8;
  border-radius: 6px;
`;

const ProgressBarFill = styled.div`
  background: #4ea3ff;
  height: 100%;
  width: ${({ width }) => width};
  border-radius: 6px;
`;

const BarTextLeft = styled.span`
  position: absolute;
  top: 22px;
  left: 0;
  font-size: 0.8rem;
  color: #555;
`;

const BarTextRight = styled(BarTextLeft)`
  left: auto;
  right: 0;
`;
