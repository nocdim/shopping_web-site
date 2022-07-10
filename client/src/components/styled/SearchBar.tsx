import styled from "styled-components";

const StyledInput = styled.input`
    font-size: 18px;
    margin-left: 1rem;
    outline: none;
    border: none;
    width: inherit;
    background: transparent;
`

const Indicator = styled.div`
    height: 15px;
    width: 15px;
    background: #9d9d9d;
    border-radius: 10px;
    margin-right: 1rem;
    border: 1px solid #70000067;
    ${StyledInput}:empty + & {
        background: #000000;
    }
    ${StyledInput}:focus + & {
        background: #ffc400;
    }
    transition: all 0.5s ease-in;
`
const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 125px;
`

const Shell = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 900px;
    height: 50px;
    border: 1px dashed #70000067;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: all 0.2s ease-out;
    &:hover {
        border: 1px solid #70000067;
    }
`
export {
    StyledInput,
    Indicator,
    Container,
    Shell
}