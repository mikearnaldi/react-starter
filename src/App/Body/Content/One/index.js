import React from 'react'
import Link from '../../../Link'

export const Button = ({children}) => {
  return (
    <div style={{border: '1px solid black', display: 'inline-block', padding: '5px'}}>{children}</div>
  )
}

export const One = () => {
  return (
    <div>Page ONE -- link to: <Link to={'/two'}>page 2</Link></div>
  )
}

export default One
