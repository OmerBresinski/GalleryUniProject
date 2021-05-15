import React from "react";
import Text from "components/Text";
import AddLocationForm from "components/AddLocationForm";
import * as S from "./style";

const Dialog = ({ onCloseClick, onSubmit }) => {
    return (
        <S.Dialog>
            <S.DialogOverlayBase>
                <S.DialogOverlay>
                    <S.DialogHeader>
                        <Text size={"24px"}>Add New Location</Text>
                    </S.DialogHeader>
                    <S.DialogContent>
                        <AddLocationForm onCloseClick={onCloseClick} onSubmit={onSubmit} />
                    </S.DialogContent>
                </S.DialogOverlay>
            </S.DialogOverlayBase>
        </S.Dialog>
    );
};

export default Dialog;
