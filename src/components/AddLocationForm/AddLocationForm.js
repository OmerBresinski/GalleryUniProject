import React, { useState } from "react";
import Text from "components/Text";
import Button from "components/Button";
import TextInput from "components/TextInput";
import TextAreaInput from "components/TextAreaInput";
import * as S from "./style";

const AddLocationForm = ({ onCloseClick, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImgSrcChange = (e) => {
        setImgSrc(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit({ title, imgSrc, description });
    };

    return (
        <S.AddLocationForm>
            <S.InputAndLabel>
                <Text size="18px">Title</Text>
                <TextInput onChange={handleTitleChange} value={title} />
            </S.InputAndLabel>
            <S.InputAndLabel>
                <Text size="18px">Image Link</Text>
                <TextInput onChange={handleImgSrcChange} value={imgSrc} />
            </S.InputAndLabel>
            <S.InputAndLabel>
                <Text size="18px">Description</Text>
                <TextAreaInput onChange={handleDescriptionChange} value={description} />
            </S.InputAndLabel>
            <S.ButtonWrapper>
                <Button onClick={onCloseClick} label={"Cancel"} color={"LightGray"} hoverColor={"Gray"} />
                <Button onClick={handleSubmit} label={"Save"} color={"DarkBlue"} hoverColor={"DarkTurquoise"} />
            </S.ButtonWrapper>
        </S.AddLocationForm>
    );
};

export default AddLocationForm;
