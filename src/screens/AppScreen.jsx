import React from 'react'
import logo from '../assets/images/logo.svg';

const AppScreen = () =>{
  return (
      <div className="app">
          <header className="app-header">
              <img src={logo} className="app-logo" alt="logo" />
              <p>
                  Welcome to React App
              </p>
              <a
                  className="app-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
          </header>
      </div>
  )
}

export default AppScreen