import Style from "styled-components";

import {Styles} from "../../styles/styles";

const { 
    background_gradient,
    font_color
} = Styles;

export const Section = Style.section `
    background: ${background_gradient};
    width: 100%;
    height: auto;
    min-height: 100vh;

    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        gap: 3rem;
    }

    article {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    article h1 {
        font-size: 30pt;
    }

    form {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .inputs {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .inputs input {
        color: #111;
        height: 40px;
        border-radius: 2px;
        padding: 0 5px;
        background: ${font_color};
        font-size: 11pt;
    }

    .input_op input {
        width: 100%;
    }

    .send input {
        color: #111;
        background: ${font_color};
        margin-top: 2rem;
        width: 100%;
        height: 40px;
        font-size: 11pt;
        font-weight: 500;
        letter-spacing: .5px;
        cursor: pointer;
        border-radius: 2px;
    }    
`