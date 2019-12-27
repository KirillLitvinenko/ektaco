import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Routes from '../Components/Routes';
import Header from '../Components/Header';

import { theme, commonStyles } from '../styles/styles';
import 'typeface-roboto';

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header />
      <Routes />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  classes: PropTypes.instanceOf(Object),
};

const styles = () => ({
  ...commonStyles,
  root: {
    flexGrow: 1,
    height: '95vh',
  },
});

export default compose(
  withRouter,
  withStyles(styles),
)(App);
