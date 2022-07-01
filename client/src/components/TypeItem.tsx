import React, { FC } from 'react'
import { IType } from '../models/IType'
import { Container } from './styled/TypeItem';

interface TypeItemProps {
  type: IType;
}

const TypeItem: FC<TypeItemProps> = ({type}) => {
  return (
    <Container>
      {type.name}
    </Container>
  )
}

export default TypeItem