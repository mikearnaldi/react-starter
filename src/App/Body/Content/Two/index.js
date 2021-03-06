import React from 'react'
import Link from '../../../Link'

export const Button = ({children}) => {
  return (
    <div style={{border: '1px solid black', display: 'inline-block', padding: '5px'}}>{children}</div>
  )
}

export const Two = () => {
  return (
    <div>Page TWO -- link to: <Link to={'/'}>page 1</Link></div>
  )
}

export default Two
