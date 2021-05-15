import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Actions from "components/Actions";
import Gallery from "components/Gallery";
import Dialog from "components/Dialog";
import * as api from "services";
import * as S from "./style";

const Home = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
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

    const handleCreate = async ({ title, imgSrc, description }) => {
        setLocations((locations) => [...locations, { title, imgSrc, description }]);
        api.addLocation({ title, imgSrc, description });
        setIsDialogOpen(false);
    };

    const handleNewClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseClick = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            {isDialogOpen && <Dialog onCloseClick={handleCloseClick} onSubmit={handleCreate} />}
            <S.BaseApp>
                <Header text={`Top ${locations?.length || 0} Locations`} />
                <Actions onNewClick={handleNewClick} />
                <Gallery photos={locations} onDelete={handleDelete} />
            </S.BaseApp>
        </>
    );
};

export default Home;
