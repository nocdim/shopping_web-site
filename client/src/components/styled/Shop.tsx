import styled from "styled-components";
import { INavbar } from "../../models/INavbar";
import { Menu } from "./NavBar";

const StyledTypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    min-height: inherit;
    top: 125px;
    left: 75px;
    @media (max-width: 1000px) {
        top: 200px;
        left: 50px;
    }
`

const StyledBrandContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    min-height: inherit;
    top: 125px;
    right: 75px;
    @media (max-width: 1000px) {
        top: 200px;
        right: 50px;
    }
`

export {
    StyledBrandContainer,
    StyledTypeContainer,
}