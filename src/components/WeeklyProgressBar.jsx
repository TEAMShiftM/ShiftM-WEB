import React from "react";
import styled from "styled-components";

const WeeklyProgressBar = ({ totalHours, maxHours }) => {
  const percentage = (totalHours / maxHours) * 100;

  return (
    <ProgressBarContainer>
      <ProgressBarFill width={`${percentage}%`} />
      <BarTextLeft>0시간</BarTextLeft>
      <BarTextRight>{maxHours}시간</BarTextRight>
    </ProgressBarContainer>
  );
};

export default WeeklyProgressBar;

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
