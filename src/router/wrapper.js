import React, { Component } from 'react'
import { StaticRouter as Router } from 'react-router'
import { connect } from 'react-redux'
import { push, replace } from './actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function mapStateToProps(state) {
  return {
    location: state.routing.location,
    action: state.routing.action,
  }
}

const mapDispatchToProps = {
  onPush: push,
  onReplace: replace,
}

const Wrapper = (props, context) => {
  return (
    <Router
      location={props.location}
      action={props.action}
      onPush={props.onPush}
      onReplace={props.onReplace}
      >
      <MuiThemeProvider>
        {props.children}
      </MuiThemeProvider>
    </Router>
  )
}

Wrapper.propTypes = {
  location: React.PropTypes.object.isRequired,
  action: React.PropTypes.string.isRequired,
  onPush: React.PropTypes.func.isRequired,
  onReplace: React.PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
