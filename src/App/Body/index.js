import React from 'react'
import {Motion, spring} from 'react-motion'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {choose} from '../../helpers'
import Content from './Content'

const Body = styled.div`
  position: relative;
  top: 51px;
  height: calc(100% - 88px);
  overflow-x: hidden;
  overflow-y: auto;
`

const BodyWrapper = ({children, drawerState}) => (
  <Motion defaultStyle={{x: 0}} style={{x: spring(drawerState ? 301 : 0, {stiffness: 150, damping: 30})}}>
    {(value => <Body style={{left: `${choose(value.x, 0)}px`, width: `calc(100% - ${choose(value.x, 0)}px)`}}>
      <Content />
    </Body>)}
  </Motion>
)

export default connect((state) => ({drawerState: state.drawer.open}))(BodyWrapper)
