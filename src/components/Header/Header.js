import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Header = ({ amountOfLocations }) => {
    return (
        <S.Header>
            <Text size={"48px"}>Top {amountOfLocations} Locations</Text>
            <S.SeperatorWrapper>
                <S.Seperator />
            </S.SeperatorWrapper>
        </S.Header>
    );
};

export default Header;
