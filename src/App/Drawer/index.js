import React from 'react'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import ClickOutside from 'react-onclickoutside'
import Content from './Content'
import { drawerActions } from './module'
import * as colors from '../styles/colors'
import {choose} from '../../helpers'

class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  render() {
    const {open, children} = this.props

    return (
      <Motion defaultStyle={{x: -300}} style={{x: spring(open ? 0 : -300, {stiffness: 150, damping: 30})}}>
        {value => <div style={{position: 'fixed', bottom: 36, width: '300px', backgroundColor: 'red', zIndex: 1, top: 0, left: `${choose(value.x, open ? 0 : -300)}px`, backgroundColor: 'white', borderRight: `1px solid ${colors.borderGrey}`}}><Content /></div>}
      </Motion>
    )
  }
  handleClickOutside(e) {
    const {open, close, clickOutside} = this.props

    if (open && clickOutside) {
      close()
    }
  }
}

export default connect((state) => ({open: state.drawer.open}), {close: drawerActions.close})(ClickOutside(Drawer))
