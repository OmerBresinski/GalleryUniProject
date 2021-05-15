import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import Text from "components/Text";
import Header from "components/Header";
import * as api from "services";
import * as S from "./style";

const Location = () => {
    const [location, setLocation] = useState({});
    const history = useHistory();
    const routeMatch = useRouteMatch();
    const { id } = routeMatch.params;

    useEffect(() => {
        fetchLocation();
    }, [id]);

    const fetchLocation = async () => {
        if (id) {
            const location = await api.getLocation(id);
            setLocation(location);
        }
    };

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        location && (
            <S.BaseLocation>
                <Header text={location.title} />
                <S.Image src={location.imgSrc}></S.Image>
                <S.Description>
                    <Text size={"18px"}>{location.description}</Text>
                </S.Description>
                <S.BackButton>
                    <Text size={"26px"} hoverColor={"black"} color={"darkgray"} onClick={handleBackClick}>
                        Back
                    </Text>
                </S.BackButton>
            </S.BaseLocation>
        )
    );
};

export default Location;
