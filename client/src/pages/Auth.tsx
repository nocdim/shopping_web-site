import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { Container, Form, Logo } from '../components/styled/Auth'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const isLogin = window.location.href.substring(21) === LOGIN_ROUTE
  const navigate = useNavigate()
  let link = window.location.href.substring(21)
  return (
    <Container>
      <Form>
        <Logo onClick={() => navigate(MAIN_ROUTE)}>
          Nokku<span>Shop</span>
        </Logo>
        <h1>{isLogin ? 'Log in' : 'Create an account'}</h1>
        {!isLogin 
        ? 
        <Input
          link={link}
          placeholder='Enter your full name...'
          type='text'
          value={name}
          onChange={(value: string) => setName(value)}
        />
        : <></>}
        <Input
          link={link}
          placeholder='Enter your email...'
          type='email'
          value={email}
          onChange={(value: string) => setEmail(value)}
        />
        <Input
          link={link}
          placeholder='Enter your password...'
          type='password'
          value={password}
          onChange={(value: string) => setPassword(value)}
        />
        {!isLogin
        ?
        <Input
          link={link}
          placeholder='Confirm your password...'
          type='password'
          value={confirmPass}
          onChange={(value: string) => setConfirmPass(value)}
        />
        : <></>
        }
        <button>
          {isLogin ? 'Log in' : 'Create your account'}
        </button>
        {isLogin 
        ?
        <h2>If you don't have an account <span onClick={() => navigate(REGISTRATION_ROUTE)}>Register!</span></h2> 
        :
        <h2>Already have an account <span onClick={() => navigate(LOGIN_ROUTE)}>Log in!</span></h2>
        }
      </Form>
    </Container>
  )
}

export default Auth