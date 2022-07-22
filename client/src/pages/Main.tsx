import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, InfoContainer, LinkBox, LinkContainer } from '../components/styled/Main'
import { ABOUT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import * as Icon from 'react-bootstrap-icons'

const Main = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <InfoContainer>
        <span>Welcome to Nokkushop</span>
      </InfoContainer>
      <LinkContainer>
        <LinkBox onClick={() => navigate(SHOP_ROUTE)}><Icon.Cart /></LinkBox>
        <LinkBox onClick={() => navigate(ABOUT_ROUTE)}><Icon.Book /></LinkBox>
        <LinkBox onClick={() => navigate(REGISTRATION_ROUTE)}><Icon.Pen /></LinkBox>
      </LinkContainer>
    </Container>

  )
}

export default Main