import React from "react";
import * as S from "./style";

const Button = ({ label, color, hoverColor, onClick, fontSize = "18px" }) => {
    return (
        <S.Button onClick={onClick} color={color} hoverColor={hoverColor} fontSize={fontSize}>
            {label}
        </S.Button>
    );
};

export default Button;
