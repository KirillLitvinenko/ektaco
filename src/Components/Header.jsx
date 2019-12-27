import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

import { commonStyles } from '../styles/styles';

const Header = ({ classes }) => {
  return (
    <div className={classes.mainHeaderNav}>
      <NavLink
        to="/jokes"
        activeClassName={classes.mainHeaderNavLinkActive}
        className={classes.mainHeaderNavLink}
      >
        Jokes
      </NavLink>
      <NavLink
        to="/about"
        className={classes.mainHeaderNavLink}
        activeClassName={classes.mainHeaderNavLinkActive}
      >
        About
      </NavLink>
    </div>
  );
};

const styles = theme => ({
  ...commonStyles,
});

export default compose(
  withStyles(styles),
)(Header);

Header.propTypes = {
  classes: PropTypes.instanceOf(Object),
};
