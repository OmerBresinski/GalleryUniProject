import React from "react";
import Header from "components/Header";
import Actions from "components/Actions";
import Gallery from "components/Gallery";
import * as S from "./style";

const App = () => {
    return (
        <S.BaseApp>
            <Header></Header>
            <Actions></Actions>
            <Gallery></Gallery>
        </S.BaseApp>
    );
};

export default App;
