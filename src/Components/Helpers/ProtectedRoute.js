import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext'

const ProtectedRoute = ({ element }) => {
  const { logged } = React.useContext(UserContext);
  if (logged === true) return element
  if (logged === false) return <Navigate to='/login' />
  return null;
}

export default ProtectedRoute
