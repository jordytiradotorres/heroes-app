import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            to="/marvel"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            end
          >
            Marvel
          </NavLink>

          <NavLink
            to="/dc"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            end
          >
            DC
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            end
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {user.name && (
            <span className="nav-item nav-link text-muted">
              Bienvenido {user.name?.toUpperCase()}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="nav-item nav-link"
            style={{ backgroundColor: 'transparent', border: 'none' }}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
