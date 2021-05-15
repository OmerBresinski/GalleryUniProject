import styled from "styled-components";

export const Gallery = styled.div`
    display: grid;
    overflow-y: auto;
    grid-template-columns: repeat(auto-fit, 400px);
    justify-content: center;
    grid-column-gap: 15px;
    grid-row-gap: 17px;
    margin-block-start: 30px;
`;
