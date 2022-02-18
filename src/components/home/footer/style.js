import Style from "styled-components";

import { Styles } from "../../styles/styles";

const {
    background_primary,
    background_secondary
} = Styles

export const Footerr = Style.footer `
    width: 100%;
    height: 30vh;
    background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);
    
    .container {
        width: 100%;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    a {
        font-size: 16pt;
    }

`