import styled from "styled-components"

interface Props {
    isOpen: boolean;
}

const Container = styled.div`
    width: 100%;
    background-color: white;
    padding: 1.5rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #0000007f;
`
const Logo = styled.div`
    padding: 0rem 1rem;
    color: #000000d9;
    text-decoration: none;
    font-weight: 800;
    font-size: 2rem;
    cursor: pointer;
    span {
        font-weight: 400;
        font-size: 1.3rem;
    }
`

const Options = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    
    span {
        height: 2px;
        width: 25px;
        background-color: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
        padding: 0rem 1rem
    }
`

const MenuLink = styled.a`
    padding: 0rem 2rem;
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in;
`

const Menu = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        margin: 1rem 0rem 0rem 0rem;
        width: 100%;
        max-height: ${({ isOpen })=> (isOpen ? "300px" : "0px" )};
        transition: max-height 0.3s ease-in;
    }
`

export {
    Container,
    Logo,
    Menu,
    MenuLink,
    Options,
}