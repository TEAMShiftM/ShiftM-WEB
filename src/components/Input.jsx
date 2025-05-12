import React from "react";
import styled from "styled-components";

const Input = ({type, placeholder, value, onChange, width, height, fontSize, id, defaultValue}) => {
    return (
        <InputS
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            width={width}
            height={height}
            size={fontSize}
            defaultValue={defaultValue}
        />
    );
};

const InputS = styled.input`

    width: ${(props) => props.width || "300px"};
    height: ${(props) => props.height || "40px"};
    padding: 0 1rem;

    font-size: ${(props) => props.fontSize || "17px"};

    border-radius: 10px;
    opacity: 0.7;

    background-color: white;

    border: 1px solid #007bff;

    &::placeholder {
        color: #007bff;
    }
`;

export default Input;