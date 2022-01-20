import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const lastPath = localStorage.getItem('lastPath') || '/';

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: { name: 'jordy' },
    });

    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
