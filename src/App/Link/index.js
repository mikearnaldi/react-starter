import React from 'react'
import {connect} from 'react-redux'
import {linkActions} from './module'
import styled from 'styled-components'
import {materialBlueGrey} from '../styles/colors'

const Wrapper = styled.div`
  display: inline-block;
  padding: 5px;
  cursor: default;
  user-select: none;
  border: 1px solid ${materialBlueGrey['50']};

  &:hover {
    background-color: ${materialBlueGrey['100']};
  }
`

const Link = (props) => (
  <Wrapper onClick={() => {
    props.clicked(props.to)
  }}>{props.children}</Wrapper>
)

export default connect(null, {clicked: linkActions.clicked})(Link)
