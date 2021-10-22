import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext'

const ProtectedRoute = (props) => {
  const { logged } = React.useContext(UserContext);

  if (logged === true) return <Route {...props} />
  else if (logged === false) return <Navigate to='/login' />
  else return null;
}

export default ProtectedRoute