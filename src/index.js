import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Page from './components/Page'
import HomePage from './pages/HomePage'

const appContainer = document.getElementById('app-container')

ReactDOM.render(<Page><HomePage /></Page>, appContainer)
