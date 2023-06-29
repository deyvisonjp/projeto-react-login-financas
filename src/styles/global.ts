import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, 
    *::after,
    *::before* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 1.6rem;
    }

    .App {
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    nav a {
        display: inline-block;
        margin: 10px;
    }

    nav a:hover {
        text-decoration: none;
    }
`;
