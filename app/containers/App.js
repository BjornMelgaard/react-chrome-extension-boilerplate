import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'
import style from './App.css'

const propTypes = {
  todos:   PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

const App = (props) => {
  const { todos, actions } = props

  console.log(todos)
  return <div className={style.normal} />
}
