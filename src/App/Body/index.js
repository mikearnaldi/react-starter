import React from 'react'
import {Motion, spring} from 'react-motion'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Body = styled.div`
  position: relative;
  top: 51px;
  height: calc(100% - 88px);
  overflow-x: hidden;
  overflow-y: auto;
`

const BodyWrapper = ({children, drawerState}) => (
  <Motion defaultStyle={{x: 0}} style={{x: spring(drawerState ? 301 : 0)}}>
    {(value => <Body style={{left: `${value.x}px`, width: `calc(100% - ${value.x}px)`}}>{children}</Body>)}
  </Motion>
)

export default connect((state) => ({drawerState: state.drawer.open}))(BodyWrapper)
