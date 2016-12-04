import React from 'react'
import {Match} from 'react-router'
import styled from 'styled-components'
import One from './One'
import Two from './Two'

const Container = styled.div`
  height: 100%;
`

const Content = () => {
  return (
    <Container>
      <Match pattern={'/'} exactly component={One} />
      <Match pattern={'/two'} exactly component={Two} />
    </Container>
  )
}

export default Content
