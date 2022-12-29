import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    if(!user){
      return <Navigate to ='/login' state={{from:location}}replace></Navigate>
    }
    return children;
};

export default PrivateRoute;