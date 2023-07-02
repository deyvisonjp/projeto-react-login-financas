import { createGlobalStyle, styled } from "styled-components";

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

export const Container = styled.div`
    
`;
export const Header = styled.div`
    justify-content: center;
    width: 95%;
    margin: auto;
    border-top: 1px solid orange;
    height: 150px;
    text-align: center;
    background: rgb(9,9,58);
    background: linear-gradient(180deg, rgba(9,9,58,1) 0%, rgba(0,68,197,1) 42%);
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;
