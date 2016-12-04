import React from 'react'
import Link from './Link'
import Drawer from './Drawer'
import * as colors from './styles/colors'
import Header from './Header'
import Body from './Body'

import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  font-family: 'Roboto';
  height: 100vh;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid ${colors.borderGrey};
`

const Entry = (props, context) => {
  return (
    <Container>
      <Header />
      <Body />
      <Drawer />
      <Footer>Copyright &copy; 2016-2017 Michael Arnaldi</Footer>
    </Container>
  )
}

export default Entry
