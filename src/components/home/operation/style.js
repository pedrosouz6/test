import Style from "styled-components";
import { Styles } from "../../styles/styles";

const {
    font_color,
    background_primary,
    background_secondary
} = Styles;

export const Section = Style.section `
    width: 100%;
    height: auto;
    background-color: ${font_color};
    padding: 230px 0 2rem 0;

    .header h2{
        color: ${background_primary};
        text-align: center;
        margin-bottom: 3rem;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        margin-bottom: 4rem;
    }

    article img {
        width: 100%;
    }

    article {
        flex: 1 1 470px;
    }

    .content p {
        text-indent: 25px;
        letter-spacing: .5px;
        line-height: 25px;
        color: ${background_primary};
        font-weight: 500;
    }

    .content button {
        padding: 10px 35px;
        font-size: 12pt;
        border-radius: 10px;
        background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 78%, ${background_primary} 100%);
        margin-top: 1.5rem;
        cursor: pointer;
    }

    @media (max-width: 1252px){
        
    }

    

`