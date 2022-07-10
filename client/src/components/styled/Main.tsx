import styled from "styled-components";

const Container = styled.div`
    font-weight: 500;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;

    span {
        font-size: 56px;
    }
`

const Slider = styled.div`
    height: 360px;
    width: 840px;
    margin: 2rem 0rem 0rem 0rem;
    border: 1px solid black;
`
const ButtonContainer = styled.div`
    height: inherit;
    width: inherit;
    display: flex;
    justify-content: space-between;
    button {
        height: inherit;
        width: 100px;
        border: none;
        outline: none;
        font-size: 50px;
        background-color: transparent;
    }
`

export {
    Container,
    Slider,
    ButtonContainer
}