import styled from "styled-components"

interface Props {
    link?: string;
}

const StyledInput = styled.input<Props>`
    width: 80%;
    max-width: 700px;
    min-width: 350px;
    height: 50px;
    border: 1px dashed #70000067;
    outline: none;
    font-size: 18px;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-3px)
    }
`

const Status = styled.div`
    height: 15px;
    width: 15px;
    background: #9d9d9d;
    border-radius: 10px;
    margin-left: 1rem;
    border: 1px solid #70000067;
    ${StyledInput}:invalid + & {
        background: #dc143c;
    }
    ${StyledInput}:focus + & {
        background: #00d0ff;
    }
    ${StyledInput}:valid + & {
        background: #70edb9;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export {
    StyledInput,
    Status,
    Container
}