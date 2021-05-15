import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Header = (props) => {
    return (
        <S.Header>
            {/* Add amount of pics */}
            <Text size={"48px"}>Top 5 Locations</Text>
            <S.SeperatorWrapper>
                <S.Seperator />
            </S.SeperatorWrapper>
        </S.Header>
    );
};

export default Header;
