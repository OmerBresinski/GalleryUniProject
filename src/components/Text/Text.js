import React from "react";
import * as S from "./style";

const Text = ({ children, size, color = "black" }) => {
    return (
        <S.Text size={size} color={color}>
            {children}
        </S.Text>
    );
};

export default Text;
