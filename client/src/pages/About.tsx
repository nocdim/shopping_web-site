import React from 'react'
import { Container, Footer } from '../components/styled/About'
import { SHOP_ROUTE } from '../utils/consts'

const About = () => {
    return (
        <>
        <Container>
            <span>Even though this company was founded in 2022 and haven't got many followers, we still strive to be better and better by day</span>
            <span>You can purchase our products <a href={SHOP_ROUTE}>here</a> and make us even greater than before</span>
        </Container>
        <Footer>Project was made by Dima Nochyovkin</Footer>
        </>
        
    )
}

export default About