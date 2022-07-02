import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    height: 50px;
    border: 1px solid #70000067;
    border-radius: 8px;
    outline: none;
    font-size: 18px;
    margin: 0rem 0rem 1rem 0rem;
    font-size: 20px;
    background-color: white;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateX(-3px);
        border: 1px solid #ff000067;
    }
    @media (max-width: 1000px) {
        min-width: 150px;
        font-size: 16px;
    }
`

export {
    Container
}