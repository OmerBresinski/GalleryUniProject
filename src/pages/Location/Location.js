import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";
import * as api from "services";
import * as S from "./style";

const Location = () => {
    const routeMatch = useRouteMatch();
    const { id } = routeMatch.params;

    useEffect(() => {
        id && api.getLocation(id);
    }, [id]);

    return <S.BaseLocation></S.BaseLocation>;
};

export default Location;
