// ShiftDetail.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import ObjectionModal from "../components/ObjectionModal";
import Header from "../components/Header";

const ShiftDetail = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shiftData = [
    { date: "2025-05-03", checkIn: "09:00", checkOut: "18:00" },
    { date: "2025-05-04", checkIn: "08:58", checkOut: "18:03" },
    { date: "2025-05-05", checkIn: "09:03", checkOut: "17:58" },
    { date: "2025-05-06", checkIn: "09:12", checkOut: "17:30" },
    { date: "2025-05-07", leave: true },
    { date: "2025-05-05", objection: true }
  ];

  const handleRightClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  return (
    <PageWrapper>
      <Title></Title>
      <Calendar
        shifts={shiftData}
        onDateRightClick={handleRightClick}
      />
      <ObjectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={selectedDate}
      />
    </PageWrapper>
  );
};

export default ShiftDetail;

const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f5f9ff;
  min-height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
