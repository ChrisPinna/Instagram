import React from 'react'
import styled from 'styled-components'
import { Create } from '../components/Create'
import { Feed } from '../components/Feed'

const Container = styled.div`
 
`
const Wrapper = styled.div`

`
export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Create/>
        <Feed/>
      </Wrapper>
    </Container>
  )
}