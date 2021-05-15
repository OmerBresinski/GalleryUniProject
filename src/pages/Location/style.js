import styled from "styled-components";

export const BaseLocation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 75px 200px 20px;
    box-sizing: border-box;
`;

export const Image = styled.img`
    margin-block-start: 20px;
    width: 65%;
    height: auto;
`;

export const Description = styled.div`
    margin-block-start: 20px;
    width: 65%;
`;

export const BackButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-block-start: 30px;
`;
