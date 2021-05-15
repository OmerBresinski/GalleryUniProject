import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Header = ({ text }) => {
    return (
        <S.Header>
            <Text size={"48px"}>{text}</Text>
            <S.SeperatorWrapper>
                <S.Seperator />
            </S.SeperatorWrapper>
        </S.Header>
    );
};

export default Header;
