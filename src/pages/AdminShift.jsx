import React from "react";
import styled from "styled-components";
import WeeklyShiftSummary from "../components/WeeklyShiftSummary";
import WeeklyProgressBar from "../components/WeeklyProgressBar";
import Header from "../components/Header";

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
    <Wrapper>
      <Header />
      <Content>
        <TitleRow>
          <DateText>2025년 2월 3일 월요일</DateText>
          <ExcelButton>엑셀 파일 변환</ExcelButton>
        </TitleRow>

        <Card>
          <CardTitle>오늘 근무</CardTitle>
          <StatsRow>
            <StatBox>
              <Label>출근 / 퇴근</Label>
              <StatValue>50 / 0</StatValue>
            </StatBox>
            <StatBox>
              <Label>지각 / 조퇴</Label>
              <StatValue>0 / 0</StatValue>
            </StatBox>
            <StatBox>
              <Label>결근</Label>
              <StatValue>0</StatValue>
            </StatBox>
          </StatsRow>
        </Card>

        <Card>
          <SectionTitle>이번주 근무 평균</SectionTitle>
          <WeeklyShiftSummary weeklyData={weeklyData} />
          <WeeklyProgressBar totalHours={totalHours} maxHours={maxHours} />
        </Card>
      </Content>
    </Wrapper>
  );
};

export default AdminShifts;

const Wrapper = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DateText = styled.p`
  font-size: 1.1rem;
  color: #444;
`;

const ExcelButton = styled.button`
  border: 1px solid #4ea3ff;
  color: #4ea3ff;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 12px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const StatBox = styled.div`
  text-align: center;
  flex: 1;
`;

const Label = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.4rem;
`;
