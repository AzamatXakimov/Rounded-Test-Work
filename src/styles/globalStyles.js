import { createGlobalStyle } from "styled-components";

import montserrat400W2 from "../assets/fonts/montserrat-v25-latin-regular.woff2";
import montserrat400W from "../assets/fonts/montserrat-v25-latin-regular.woff";
import montserrat500W2 from "../assets/fonts/montserrat-v25-latin-500.woff2";
import montserrat500W from "../assets/fonts/montserrat-v25-latin-500.woff";
import montserrat600W2 from "../assets/fonts/montserrat-v25-latin-600.woff2";
import montserrat600W from "../assets/fonts/montserrat-v25-latin-600.woff";
import montserrat700W2 from "../assets/fonts/montserrat-v25-latin-700.woff2";
import montserrat700W from "../assets/fonts/montserrat-v25-latin-700.woff";
import nextArt400W2 from "../assets/fonts/next-art-400.woff2";
import nextArt400W from "../assets/fonts/next-art-400.woff";
import nextArt600W2 from "../assets/fonts/next-art-600.woff2";
import nextArt600W from "../assets/fonts/next-art-600.woff";
import nextArt700W2 from "../assets/fonts/next-art-700.woff2";
import nextArt700W from "../assets/fonts/next-art-700.woff";


const GlobalStyles = createGlobalStyle`
    /* ROOT */
    :root{
        --main-font-family: "Montserrat", "Arial", sans-serif;
        --main-font-weight: 400;
        --main-body-bg-color: #fff;
    }

    @font-face {
        font-display: swap; 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url(${montserrat400W2}) format('woff2'), 
            url(${montserrat400W}) format('woff'); 
    }
    @font-face {
        font-display: swap; 
        font-family: 'NEXT ART';
        font-style: normal;
        font-weight: 400;
        src: url(${nextArt400W2}) format('woff2'), 
            url(${nextArt400W}) format('woff'); 
    }
    @font-face {
        font-display: swap;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        src: url(${montserrat500W2}) format('woff2'), 
            url(${montserrat500W}) format('woff'); 
    }
    @font-face {
        font-display: swap;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        src: url(${montserrat600W2}) format('woff2'), 
            url(${montserrat600W}) format('woff'); 
    }
    @font-face {
        font-display: swap;
        font-family: 'NEXT ART';
        font-style: normal;
        font-weight: 600;
        src: url(${nextArt600W2}) format('woff2'), 
            url(${nextArt600W}) format('woff'); 
    }
    @font-face {
        font-display: swap;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: url(${montserrat700W2}) format('woff2'), 
            url(${montserrat700W}) format('woff'); 
    }
    @font-face {
        font-display: swap;
        font-family: 'NEXT ART';
        font-style: normal;
        font-weight: 700;
        src: url(${nextArt700W2}) format('woff2'), 
            url(${nextArt700W}) format('woff'); 
    }


    *,*::before, *::after {
        box-sizing: border-box;
    }

    html{
        height: 100%;
        scroll-behavior: smooth;
    }

    img{
        display: block;
        height: auto;
    }

    body{
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        background-color: var(--main-body-bg-color);
    }

    main{
        flex-grow: 1;
    }

    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;

export default GlobalStyles;