import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 2rem);
    span {
        font-size: 30px;
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
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
`

export {
    Container,
    Footer
}