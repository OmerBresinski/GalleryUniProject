import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    justify-content: center;
    padding: 7px 10px;
    border-radius: 10px;
    background: ${({ color }) => color};
    min-width: 50px;
    font-size: ${({ fontSize }) => fontSize};
    color: white;
    cursor: pointer;
    &:hover {
        background: ${({ hoverColor }) => hoverColor};
    }
`;
