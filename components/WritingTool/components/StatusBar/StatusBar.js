import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './StatusBar.styles'

@connect(store => {
  return {
    wordCount: store.wordCount,
    constraints: store.constraints
  }
})
export default class StatusBar extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    light: PropTypes.bool
  }

  render () {
    return (
      <div
        className='host'
        style={{
          color: this.props.light
            ? 'rgba(0, 0, 0, .8)'
            : 'rgba(255, 255, 255, .8)',
          backgroundColor: this.props.bgColor
        }}
      >
        <div className='counter'>
          Words: {this.props.wordCount}
        </div>
        <style jsx>
          {styles}
        </style>
      </div>
    )
  }
}