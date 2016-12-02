import React from 'react'
import styled from 'styled-components'
import * as colors from '../styles/colors'
import {connect} from 'react-redux'
import {drawerActions} from '../Drawer/module.js'
import {Motion, spring} from 'react-motion'
import Icon from '../Icon'
import TitleContent from './Title'

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${colors.borderGrey};
  background-color: ${colors.lightBlue};
`

const TitleWrapper = styled.div`
  color: ${colors.textWhite}
  display: inline-block;
  font-size: 20px;
  margin-left: 5px;
  top: -8px;
  position: relative;
`

const getIcon = (drawerState, rotation) => {
  if (drawerState && rotation > 45) {
    return 'more_horiz'
  }
  return 'menu'
}

const Header = ({drawerToggle, drawerState}) => (
  <HeaderWrapper>
    <Motion defaultStyle={{x: 5, y: 0}} style={{x: spring(drawerState ? 305 : 5), y: spring(drawerState ? 90 : 0)}}>
      {(value) => (
        <Icon
          style={{marginTop: '7px', marginLeft: `${value.x}px`}}
          innserStyle={{transform: `rotate(${value.y}deg)`, color: colors.buttonGrey}}
          onClick={() => {drawerToggle()}}>
          {getIcon(drawerState, value.y)}
        </Icon>
      )}
    </Motion>
    <TitleWrapper><TitleContent /></TitleWrapper>
  </HeaderWrapper>
)

export default connect((state) => ({drawerState: state.drawer.open}), {drawerToggle: drawerActions.toggle})(Header)
