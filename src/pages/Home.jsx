import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CheckInModal from "../components/CheckInModal";
import WeeklyShiftSummary from "../components/WeeklyShiftSummary";
import WeeklyProgressBar from "../components/WeeklyProgressBar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("none");

  const handleButtonClick = () => {
    if (status === "working") {
      setStatus("checkedOut");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleConfirmCheckIn = () => {
    setStatus("working");
    setIsModalOpen(false);
  };

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
    <BackgroundWrapper>
      <Header />
      <Container>
        <DateRow>
          <DateText>2025년 2월 3일 월요일</DateText>
          <TopButtons>
            <OutlineButton>휴가 내역 확인</OutlineButton>
            <FillButton>휴가 신청</FillButton>
          </TopButtons>
        </DateRow>

        <Card>
          <CardTitle>
            오늘 근무
            {status === "working" && <WorkingBadge>근무중</WorkingBadge>}
            {status === "checkedOut" && <WorkingBadge>퇴근</WorkingBadge>}
          </CardTitle>
          <CardSub>9:00 - 18:00 | 본사</CardSub>
          <MainButton onClick={handleButtonClick}>
            {status === "working" ? "퇴근" : "출근"}
          </MainButton>
        </Card>

        <Card>
          <SectionTitle>이번주 근무</SectionTitle>
          <WeeklyShiftSummary weeklyData={weeklyData} />
          <WeeklyProgressBar totalHours={totalHours} maxHours={maxHours} />
        </Card>

        <CheckInModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmCheckIn}
          isLocationMatch={true}
        />
      </Container>
    </BackgroundWrapper>
  );
};

export default Home;

const BackgroundWrapper = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

const DateText = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const TopButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const FillButton = styled.button`
  background-color: #4ea3ff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
`;

const OutlineButton = styled(FillButton)`
  background: white;
  color: #4ea3ff;
  border: 1px solid #4ea3ff;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem 3rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CardSub = styled.p`
  color: #777;
  margin-bottom: 2.5rem;
`;

const MainButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #4ea3ff;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const WorkingBadge = styled.span`
  background: #406685;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;
