import styled from 'styled-components';

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 50px;
        font-weight: 300;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
    }
`;

export const Wrapper = styled.div`
    width: 360px;
    height: 400px;
    background-color: rgb(0,18,21);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
