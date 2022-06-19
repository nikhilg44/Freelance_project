import Main from './App.js'
import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'

/**
 * Redirect users from protected pages to home page before login.
 */
const ProtectedRoute = ({ component:Component, isAuth, ...rest }) => {
  return (
    <Routes>
    <Route
      {...rest}
      render={routerProps => (
        isAuth
          ? <Component {...routerProps}/>
          : <Navigate
            to={{ pathname: Main }}
          />
      )}
    />
    </Routes>
  )
}

export default ProtectedRoute