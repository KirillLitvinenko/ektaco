import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { commonStyles } from '../styles/styles';

const About = ({ classes }) => (
  <div className={classes.page}>
    <Typography variant="h4" component="h4">Kirill Litvinenko</Typography>
    <Typography variant="subtitle1">Frontend developer</Typography>
    <div className={classes.contactsBox}>
      <div>
        <Typography component="span" className={classes.contactTitle}>Mail:</Typography>
        <Link href='mailto:litvinenkokirill@gmail.com' className={classes.externalLink} variant="body1">litvinenkokirill@gmail.com</Link>
      </div>
      <div>
        <Typography component="span" className={classes.contactTitle}>Phone:</Typography>
        <Link href='tel:+37258014186' className={classes.externalLink} variant="body1">+37258014186</Link>
      </div>
      <div>
        <Typography component="span" className={classes.contactTitle}>Skype:</Typography>
        <Link href='tel:kirill.litvinenko' className={classes.externalLink} variant="body1">kirill.litvinenko</Link>
      </div>
    </div>
    <Typography variant="body1" className={classes.mb10}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae
      eaque, in minus molestias, perspiciatis praesentium quasi recusandae similique sint sunt totam! Cupiditate
      inventore ipsam qui reprehenderit unde. Suscipit.</Typography>
    <Typography variant="body1" className={classes.mb10}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae
      eaque, in minus molestias, perspiciatis praesentium quasi recusandae similique sint sunt totam! Cupiditate
      inventore ipsam qui reprehenderit unde. Suscipit.</Typography>
  </div>
);

const styles = theme => ({
  ...commonStyles,
});

export default compose(
  withStyles(styles),
)(About);

About.propTypes = {
  classes: PropTypes.instanceOf(Object),
};