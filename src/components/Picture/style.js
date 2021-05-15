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
    overflow: hidden;
    &:hover ${ButtonLayer} {
        display: block;
    }
`;

export const Image = styled.img`
    width: 400px;
    height: 238px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
`;
