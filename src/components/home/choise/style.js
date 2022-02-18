import Style from "styled-components";

import { Styles } from "../../styles/styles";

const { 
    background_primary,
    background_secondary,
    font_color,
    background_third
} = Styles;

export const Section = Style.section `
    width: 100%;
    height: auto;
    padding: 3rem 0;
    background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);

    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }

    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
    }
    
    .cards {
        width: 260px;
        height: auto;
        background-color: ${font_color};
        border-radius: 10px;
        padding: 25px 15px;
    }

    .icons i {
        display: block;
        text-align: center;
        font-size: 40px;
    }

    h4 {
        color: ${background_primary};
        font-size: 14pt;
        margin: 5px 0 20px 0;
        text-align: center;
    }

    ul li {
        list-style: none;
        color: ${background_primary};
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    button {
        width: 100%;
        height: 35px;
        margin-top: 15px;
        background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 78%, ${background_primary} 100%);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: .5px; 
    }

    button:hover {
        background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 28%, ${background_primary} 100%);
    }
`