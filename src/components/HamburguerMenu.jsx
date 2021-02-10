import React from "react";
import Styled from "@emotion/styled";
import HamburguerIcon from "./icons/HamburguerIcon";

const StyledHamburguerMenu = Styled.button`
        .menu {
            background-color: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            padding: 0;
            height: 30px;
        }
        .line {
            fill: none;
            stroke: white;
            stroke-width: 6;
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .line1 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
        }
        .line2 {
            stroke-dasharray: 60 60;
            stroke-width: 6;
        }
        .line3 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
        }
        .opened .line1 {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
            stroke-width: 6;
        }
        .opened .line2 {
            stroke-dasharray: 1 60;
            stroke-dashoffset: -30;
            stroke-width: 6;
        }
        .opened .line3 {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
            stroke-width: 6;
        }
`;

const HamburguerMenu = () => {
    return (
        <StyledHamburguerMenu
            className="menu navbar-toggler collapsed"
            onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
            aria-label="Toggle navigation"
            aria-controls="responsive-navbar-nav"
            type="button"

        >
            <HamburguerIcon></HamburguerIcon>
        </StyledHamburguerMenu>
    );
};

export default HamburguerMenu;
