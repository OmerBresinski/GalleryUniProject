import React from "react";
import * as S from "./style";

const TextInput = ({ onChange, value }) => {
    return <S.TextInput value={value} onChange={onChange} />;
};

export default TextInput;
