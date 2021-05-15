import React from "react";
import * as S from "./style";

const Text = ({ children, size, hoverColor, color = "black", onClick = () => {} }) => {
    return (
        <S.Text size={size} color={color} onClick={onClick} hoverColor={hoverColor}>
            {children}
        </S.Text>
    );
};

export default Text;
