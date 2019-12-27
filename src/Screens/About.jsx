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
    <Typography variant="body1" className={classes.mb10}>I have been working in IT for 7 years, I started as a frontend
      developer and still doing staff on a fronted side but during the last two years I’m also working as a Scrum
      Master. Last year I passed certification so now I’m CSM with pretty big tech background.
      More detailed info in the attached CV but if we are talking about projects which I was taken part in, they are
      were really different — e-commerce, learning platforms, betting and a lot of others. Those projects were also
      different from team composition purpose — form me doing all work alone to pretty much big teams. Now as an SM I
      helping our team which is 15 people in total.</Typography>
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