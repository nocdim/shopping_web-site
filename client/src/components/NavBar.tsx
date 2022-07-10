import React, { useState } from 'react'
import { Container, Logo, Menu, MenuLink, Options } from './styled/NavBar'
import { useNavigate } from 'react-router-dom'
import { ABOUT_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)
    let link = window.location.href.substring(21)
    const navigate = useNavigate()

    return (
        <Container link={link}>
            <Logo onClick={() => navigate(MAIN_ROUTE)}>
                Nokku<span>shop</span>
            </Logo>
            <Options onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Options>
            <Menu isOpen={isOpen}>
                <MenuLink onClick={() => navigate(SHOP_ROUTE)}>Products and devices</MenuLink>
                <MenuLink onClick={() => navigate(ABOUT_ROUTE)}>About us</MenuLink>
                <MenuLink onClick={() => navigate(REGISTRATION_ROUTE) }>Sign in</MenuLink>
            </Menu>
        </Container>
    )
}

export default NavBar