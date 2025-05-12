import React from "react";
import styled from "styled-components";

const Button = ({text, onClick, width, height, fontSize, color}) => {
    return (
        <ButtonS
            onClick={onClick}
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
        >
            {text}
        </ButtonS>
    );
};

const ButtonS = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => props.width || "120px"};
    height: ${(props) => props.height || "40px"};

    font-size: ${(props) => props.fontSize || "17px"};

    border-radius: 10px;
    opacity: 0.7;

    background-color: ${(props) =>
            props.color === "white" ? "white" : "#007bff"};
    color: ${(props) => (props.color === "white" ? "black" : "white")};
    border: ${(props) =>
            props.color === "white" ? "1px solid #007bff" : "none"};
`;

export default Button;