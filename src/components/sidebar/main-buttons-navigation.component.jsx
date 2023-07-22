import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';

export const MainButtonsNavigation = ({ width }) => {
  const { currentUser } = useContext(UserContext);

  const buttonsNavbar = () => {
    if (width >= 900 && currentUser) {
      return (
        <div className="div nav-links-container">
          <Link className="nav-link" to="/shop">
            BOUTIQUE
          </Link>
          <span className="nav-link" onClick={signOutUser}>
            DECONNEXION
          </span>
          <CartIcon />
        </div>
      );
    }
    if (width >= 900 && !currentUser) {
      return (
        <div className="div nav-links-container">
          <Link className="nav-link" to="/shop">
            BOUTIQUE
          </Link>
          <Link className="nav-link" to="/auth">
            CONNEXION
          </Link>
          <CartIcon />
        </div>
      );
    }
    return (
      <div className="div nav-links-container">
        <CartIcon />
      </div>
    );
  };

  return buttonsNavbar();
};

export default MainButtonsNavigation;
