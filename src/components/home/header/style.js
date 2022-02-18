import Style from "styled-components";

import { Styles } from "../../styles/styles";

const { 
    background_primary,
    background_secondary,
    font_color,
    height_header
 } = Styles;

 //820px

export const HeaderSite =  Style.header `
      width: 100%;
      height: ${height_header};
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);

    .container {
            width: 100%;
            height: ${height_header};
            display: flex;
            justify-content: space-between;
            align-items: center;
      }

      nav {
            display: flex;
            align-items: center;
            gap: 1.5rem;
      }

      .register a {
            padding: 10px 20px;
            background-color: ${font_color};
            color: ${background_primary};
            border-radius: 10px;
            text-decoration: none;
            font-weight: 500;
      }
      
      .list {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 1.5rem;
      }

      .list button {
            display: none;
      }

      .list a {
            text-decoration: none;
      }

      .menu {
            background: none;
            color: ${font_color};
            font-size: 22pt;
            display: none;
            cursor: pointer;
      }
      
      @media (max-width: 820px) {
            .menu{
                  display: flex;
                  z-index: 12;
            }

            .list {
                  width: 50%;
                  height: 100vh;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  z-index: 11;
                  top: 0;
                  left: 100%;
                  visibility: hidden;
                  background: ${background_primary};
                  border-left: 2px solid ${font_color};
                  padding: 10px;
                  position: fixed;
                  transition: .3s ease-in-out;
            }

            .list button {
                  display: block;
                  margin-top: 1rem;
            }

            nav.active .list {
                  visibility: visible;
                  left: 50%;
            }
      }

      @media (max-width: 570px) {
            .list {
                  width: 100%;
                  border: none;
            }

            nav.active .list {
                  left: 0%;
            }

      }
`