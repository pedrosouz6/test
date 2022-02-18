import Style from "styled-components";

import { Styles } from "../../styles/styles";

const {
    font_color,
    background_primary,
    background_secondary
} = Styles;

export const Section = Style.section `
    width: 100%;
    background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);

    .container {
        height: 250px;
        width: 100%;
    }

    .container h2 {
        text-align: center;
        color: ${font_color};
        margin-bottom: 3rem;
        position: relative;
    }

    .container h2::before{
        content: '';
        position: absolute;
        top: -65px;
        left: 50%;
        display: block;
        width: 10px;
        height: 30px;
        border-radius: 50px;
        background: ${font_color};
    }

    article {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .cards {
        width: 260px;
        height: 320px;
        padding: 15px;
        background-color: ${font_color};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 3px 1px rgba(0, 127, 39, .6);
    }

    .cards p {
        color: ${background_primary};
        letter-spacing: .3px;
        text-indent: 10px;
    }

    .icon i {
        font-size: 30pt;
    }

    .title h3 {
        color: ${background_primary};
        margin-bottom: .8rem;
    }

    @media (max-width: 1252px){
        .container{
            height: 590px;
        }
    }

    @media (max-width: 870px){
        .container{
            padding-top: 200px;
            height: 780px;
        }
    }

    @media (max-width: 660px){
        .container{
            padding-top: 150px;
        }
    }

    @media (max-width: 560px){
        .container{
            padding-top: 100px;
        }
    }

    @media (max-width: 490px){
        .container{
            padding-top: 50px;
        }
    }

    @media (max-width: 668px){
        .container{
            height: 1430px;
        }
    }


`