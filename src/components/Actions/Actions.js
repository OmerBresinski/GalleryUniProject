import React from "react";
import Button from "components/Button";
import * as S from "./style";

const Actions = ({ onNewClick }) => {
    return (
        <S.Actions>
            <Button onClick={onNewClick} color={"LimeGreen"} hoverColor={"Lime"} label={"New Location"} />
        </S.Actions>
    );
};

export default Actions;
