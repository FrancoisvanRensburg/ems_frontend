import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { logout } from '../../../Redux/actions/authActions';

import { ReactComponent as WhippLogo } from '../../../App/assets/images/logo.svg';
import { ReactComponent as SeactIcon } from '../../../App/assets/images/search.svg';
import { ReactComponent as ChatIcon } from '../../../App/assets/images/chat-icon.svg';
import { ReactComponent as AvatarIcon } from '../../../App/assets/images/avatar.svg';

import Bubble from './Notifications/Actions/Bubble';

// Styled components
import { NavWrapper, NotLogoLinks, StyledLink } from './Styles';

const NavbarTop = ({ isAuthenticated, loading, logout, history, user }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    history.push('/');
  };
  const authLinks = (
    <NotLogoLinks>
      <SeactIcon />
      <ChatIcon />
      <Bubble />
      <StyledLink onClick={logout} to='/login'>
        Logout
      </StyledLink>
      <AvatarIcon />
    </NotLogoLinks>
  );
  return (
    <Fragment>
      <NavWrapper>
        {isAuthenticated ? (
          <Link to='/user/overview'>
            <WhippLogo className='whipp-logo' />
          </Link>
        ) : (
          <Link to='/login'>
            <WhippLogo className='whipp-logo' />
          </Link>
        )}
        {/* {<Fragment>{authLinks}</Fragment>} */}
        {!loading && user !== null && (
          <Fragment>{isAuthenticated && authLinks}</Fragment>
        )}
      </NavWrapper>
    </Fragment>
  );
};

NavbarTop.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated, loading, user } }) => ({
  isAuthenticated,
  loading,
  user,
});

export default connect(mapStateToProps, { logout })(withRouter(NavbarTop));
