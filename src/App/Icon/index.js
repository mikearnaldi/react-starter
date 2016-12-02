import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  text-align: center;
  padding-top: 3px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  display: inline-block;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  & > i {
    user-select: none;
    font-size: 30px;
  }
`

const Icon = ({style, onClick, children, innserStyle}) => (<IconWrapper onClick={onClick ? onClick : undefined} style={{...style}}><i style={{...innserStyle}} className='material-icons'>{children}</i></IconWrapper>)

export default Icon
