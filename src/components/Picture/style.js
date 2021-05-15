import styled from "styled-components";

export const ButtonLayer = styled.div`
    display: none;
    position: absolute;
    bottom: 30px;
    right: 10px;
    z-index: 10;
`;

export const Picture = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    &:hover ${ButtonLayer} {
        display: block;
    }
`;

export const Image = styled.img``;
