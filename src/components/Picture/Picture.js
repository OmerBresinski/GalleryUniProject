import React from "react";
import Text from "components/Text";
import Button from "components/Button";
import * as S from "./style";

const Picture = ({ id, title, src, onClick, onDelete }) => {
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(id);
    };

    return (
        <S.Picture onClick={onClick}>
            <S.Image src={src} />
            <Text size={"14px"}>{title}</Text>
            <S.ButtonLayer>
                <Button color={"tomato"} hoverColor={"red"} label={"Delete"} onClick={handleDeleteClick} fontSize={"14px"}></Button>
            </S.ButtonLayer>
        </S.Picture>
    );
};

export default Picture;
