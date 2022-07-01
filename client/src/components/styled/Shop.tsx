import styled from "styled-components";

const StyledTypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    min-height: calc(100vh - 1.5rem);
    top: 125px;
    left: 75px;
    @media (max-width: 1000px) {
        top: 250px;
        left: 50px;
        position: absolute;
        min-height: inherit;
    }
`

const StyledBrandContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    min-height: calc(100vh - 1.5rem);
    top: 125px;
    right: 75px;
    @media (max-width: 1000px) {
        top: 250px;
        right: 50px;
        position: absolute;
        min-height: inherit;
    }
`

export {
    StyledBrandContainer,
    StyledTypeContainer
}