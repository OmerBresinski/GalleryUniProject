import styled from "styled-components";

export const Dialog = styled.div`
    position: relative;
`;

export const DialogOverlayBase = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100vw;
    height: 100vh;
    padding-block-start: 250px;
    align-items: center;
    z-index: 10000;
    box-sizing: border-box;
`;

export const DialogOverlay = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 250px;
    border: 1px solid black;
    border-radius: 15px;
    background: white;
    padding: 10px 20px;
`;

export const DialogHeader = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
`;

export const DialogContent = styled.div`
    width: 100%;
    height: 100%;
`;
