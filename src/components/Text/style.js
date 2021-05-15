import styled from "styled-components";

export const Text = styled.div`
    color: ${({ color }) => color};
    font-size: ${({ size }) => size};
    cursor: ${({ hoverColor }) => hoverColor && "pointer"};
    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;
