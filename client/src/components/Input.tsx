import React from 'react'
import { InputProps } from '../models/IInput'
import { Container, Status, StyledInput } from './styled/Input'

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <Container>
        <StyledInput 
        link={props.link}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"} 
        onChange={e => props.onChange(e.target.value)}
        required
        />
        <Status />
    </Container>
  )
}

export default Input