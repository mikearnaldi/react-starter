import React from 'react'
import Link from '../../Link'

export const Button = ({children}) => {
  return (
    <div style={{border: '1px solid black', display: 'inline-block', padding: '5px'}}>{children}</div>
  )
}

export const One = () => {
  return (
    <div>OKOKOKOK: <Link to={'/two'}>page_2</Link></div>
  )
}

export default One
