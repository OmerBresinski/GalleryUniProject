import React from "react";
import Button from "components/Button";
import * as S from "./style";

const Actions = (props) => {
    return (
        <S.Actions>
            <Button color={"LimeGreen"} hoverColor={"Lime"} label={"New Location"} />
        </S.Actions>
    );
};

export default Actions;
