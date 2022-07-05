import React from 'react'
import { ButtonContainer, Container, Slider } from '../components/styled/Main'

const Main = () => {
  return (
    <Container>
        <span>Welcome to Nokkushop</span>
        <Slider>
          <ButtonContainer>
            <button></button>
            <button></button>
          </ButtonContainer>
        </Slider>
    </Container>
  )
}

export default Main