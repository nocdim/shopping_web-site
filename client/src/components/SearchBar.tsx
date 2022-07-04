import React from 'react'
import { ISearch } from '../models/ISearch'
import { StyledInput, Indicator, Container, Shell } from './styled/SearchBar'

const SearchBar: React.FC<ISearch> = (props: ISearch) => {
  return (
    <Container>
      <Shell>
        <StyledInput
          placeholder={props.placeholder}
          type={props.type ? props.type : "text"}
          onChange={e => props.onChange(e.target.value)}
        >
        </StyledInput>
        <Indicator />
      </Shell>
    </Container>

  )
}

export default SearchBar