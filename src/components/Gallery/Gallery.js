import React from "react";
import Picture from "components/Picture";
import * as S from "./style";

const Gallery = ({ photos, onDelete }) => {
    return (
        <S.Gallery>
            {photos?.map(({ _id, title, imgSrc }) => {
                return <Picture key={_id} title={title} src={imgSrc} id={_id} onDelete={onDelete} />;
            })}
        </S.Gallery>
    );
};

export default Gallery;
