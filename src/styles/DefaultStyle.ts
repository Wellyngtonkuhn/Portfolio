import { createGlobalStyle } from "styled-components";

export const DefaultStyle = createGlobalStyle`
    :root{
        font-size: 16px;
        font-family: 'DM Sans', sans-serif;   
             
        /* @media screen and (min-width: 768px){
            font-size: 2.25vw;
        }

        @media screen and (min-width: 1280px ){
            font-size: 16px;
        } */
    }

    html {
        scroll-behavior: smooth;
    }

    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;
