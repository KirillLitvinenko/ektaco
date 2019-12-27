import { createMuiTheme } from '@material-ui/core/styles';

export const COLORS = {
  orange: '#F85C5C',
  white: '#FFFFFF',
  blueGrey: '#374455',
  text: '#373737',
  textLight: '#626262',
  lightGrey: '#C7C7C7',
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.blueGrey,
    },
    secondary: {
      main: COLORS.text,
    },
    error: {
      main: COLORS.orange,
    },
  },
  typography: {
    body1: {
      fontWeight: 400,
      color: COLORS.text,
    },
    h4: {
      color: COLORS.text,
    },
    h6: {
      color: COLORS.text,
    },
    subtitle1: {
      color: COLORS.text,
    },
  },
});

export const commonStyles = {
  /* Page */
  page: {
    padding: 20,
    overflow: 'hidden',
  },
  externalLink: {
    color: COLORS.blueGrey,
  },
  mb10: {
    marginBottom: 10,
  },

  /* Header */
  mainHeaderNav: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainHeaderNavLink: {
    flexGrow: 1,
    textAlign: 'center',
    border: `2px solid ${COLORS.blueGrey}`,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    color: COLORS.blueGrey,
    textDecoration: 'none',
    fontFamily: 'Roboto',
  },
  mainHeaderNavLinkActive: {
    backgroundColor: COLORS.blueGrey,
    color: COLORS.white,
  },

  /* Jokes */
  jokesPage: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainColumn: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    paddingRight: 10,
    alignItems: 'center',
  },
  secondaryColumn: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    border: `2px solid ${COLORS.lightGrey}`,
  },
  mobilePage: {
    flexDirection: 'column',
  },
  fullWidthColumn: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
  },
  columnTitle: {
    backgroundColor: COLORS.lightGrey,
    padding: 8,
    textAlign: 'center',
  },
  jokeBox: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.lightGrey,
    width: '80%',
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jokeBoxSaved: {
    width: 'auto',
    marginBottom: 8,
    minHeight: 0,
  },
  jokeBoxInner: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  jokesBoxFooter: {
    marginTop: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  footerIcons: {
    marginLeft: 8,
  },
  joke: {
    fontStyle: 'italic',
    flex: 1,
  },
  categoriesSet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  catButton: {
    margin: 4,
  },
  catButtonActive: {
    backgroundColor: COLORS.orange,
  },
  editPopup: {
    width: 500,
    height: 300,
  },
  editJokeInput: {
    width: '100%',
    borderRadius: 4,
    fontSize: 16,
    fontFamily: 'Roboto',
    lineHeight: '18px',
  },

  /* Contacts */
  contactsBox:{
    marginTop: 10,
    marginBottom: 10,
  },
  contactTitle: {
    color: COLORS.textLight,
    marginRight: 5,
  },
};