import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    span {
        font-size: 27px;
        font-weight: 500;
        padding: 1rem 3rem;
        a {
            color: #ff3838;
            text-decoration: none;
        }
    }
`
const Footer = styled.div`
    display: flex;
    position: absolute;
    top: 900px;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
`

export {
    Container,
    Footer
}