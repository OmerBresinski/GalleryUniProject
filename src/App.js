import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Actions from "components/Actions";
import Gallery from "components/Gallery";
import Dialog from "components/Dialog";
import * as api from "services";
import * as S from "./style";

const App = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        const tmpLocations = await api.getLocations();
        setLocations(tmpLocations);
    };

    const handleDelete = async (id) => {
        setLocations((locations) => locations.filter(({ _id }) => _id !== id));
        api.deleteLocation(id);
    };

    return (
        <>
            <Dialog />
            <S.BaseApp>
                <Header amountOfLocations={locations?.length || 0} />
                <Actions />
                <Gallery photos={locations} onDelete={handleDelete} />
            </S.BaseApp>
        </>
    );
};

export default App;
