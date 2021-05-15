import React from "react";
import * as S from "./style";

const TextAreaInput = ({ onChange, value }) => {
    return <S.TextAreaInput value={value} onChange={onChange} />;
};

export default TextAreaInput;
