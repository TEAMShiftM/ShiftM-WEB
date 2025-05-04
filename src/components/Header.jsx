import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        shift<span>M</span>
      </Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  background-color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #2f5fd7;

  span {
    color: #4ea3ff;
  }
`;
