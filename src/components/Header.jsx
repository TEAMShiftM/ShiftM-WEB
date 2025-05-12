import React from "react";
import styled from "styled-components";
import Button from "./Button.jsx";

const Header = () => {
    return (
        <HeaderS>
            <LogoS>
                <img src="/logo.png" alt="shiftM"/>
            </LogoS>
            <ButtonS>
                <Button text={"로그인"} color={"blue"}/>
            </ButtonS>
        </HeaderS>
    );
};

const HeaderS = styled.header`
    width: 100%;
    height: 70px;
    background-color: #F9FCFF;
    display: flex;

    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1000;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        height: 60px;
        position: static;
    }
`;

const LogoS = styled.div`
    cursor: pointer;

    img {
        height: 60px;
        margin-left: 15px;

        @media (max-width: 768px) {
            margin-left: 6px;
            height: 45px;
        }
    }
`;

const ButtonS = styled.div`
    button {
        cursor: pointer;
        font-size: 1rem;
        margin-right: 15px;
        width: 100px;

        @media (max-width: 768px) {
            margin-right: 7px;
            font-size: 0.8rem;
            width: 70px;
            height: 35px;
        }
    }
`;

export default Header;
