import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    h2 {
        color: #808080;
        font-weight: bold;
        margin-top: 1rem;
        span {
            color: #700000b2;
            cursor: pointer;
        }
    }
`
const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`
const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 700px;
        min-width: calc(350px + 4rem);
        height: 40px;
        border: none;
        outline: none;
        font-size: 18px;
        margin: 0.5rem 0 0.5rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #ed7070;
        color: #000000;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px)
        }
    }
`

const Logo = styled.div`
    color: #000000d9;
    text-decoration: none;
    font-weight: 800;
    font-size: 4rem;
    cursor: pointer;
    span {
        font-weight: 400;
        font-size: 2.6rem;
    }
`

const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: #fff;
        margin-bottom: 2rem;
    };
    button {
        max-width: 700px;
        min-width: calc(350px + 4rem);
        height: 60px;
        border: none;
        outline: none;
        font-size: 18px;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #505050;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
            transform: translateY(-3px)
        }
    }
`

export {
    Container,
    Logo,
    Form,
    ErrorContainer,
    ErrorMessage
}