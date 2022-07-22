import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InfoContainer = styled.div`
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    align-items: center;
    height: 650px;
    width: 1250px;
    border: 1px solid #0000001d;
    border-radius: 45px;
    background-color: white;
    box-shadow: 0 0 50px rgba(0,0,0,0.2);

    span {
        font-size: 56px;
    }
`

const LinkContainer = styled.div`
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border: 1px solid #0000001d;
    background-color: white;
    border-radius: 100px;
    box-shadow: 0 0 50px rgba(0,0,0,0.2);
    margin: 2rem 0rem 2rem 6rem;
    font-size: 58px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateX(7px);
    }
`

export {
    Container,
    InfoContainer,
    LinkContainer,
    LinkBox,
}