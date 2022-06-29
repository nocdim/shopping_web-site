import React, { useState } from 'react'
import { Container, Logo, Menu, MenuLink, Options } from './styled/NavBar'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)
    
    return (
        <Container>
            <Logo>
                Nokku<span>shop</span>
            </Logo>
            <Options onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Options>
            <Menu isOpen={isOpen}>
                <MenuLink>About us</MenuLink>
                <MenuLink>Log in</MenuLink>
            </Menu>
        </Container>
    )
}

export default NavBar