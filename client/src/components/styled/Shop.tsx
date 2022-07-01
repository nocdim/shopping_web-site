import styled from "styled-components";

const StyledTypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    min-height: calc(100vh - 1.5rem);
    top: 150px;
    left: 75px;
`

const StyledBrandContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    min-height: calc(100vh - 1.5rem);
    top: 150px;
    right: 75px;
`

export {
    StyledBrandContainer,
    StyledTypeContainer
}