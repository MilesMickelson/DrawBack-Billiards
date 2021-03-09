/* eslint-disable object-shorthand */
import { createMuiTheme } from '@material-ui/core/styles';

const white = '#FFFFFF';
const white2 = '#F5F5F5';
const white3 = '#E6E6E6';
const black = '#000000';
const black2 = '#0D0D0D';
const black3 = '#1A1A1A';
const primary = '#007FAA';
const primaryLight = '#54AEDC';
const primaryDark = '#00537b';
const secondary = '#76ff03';
// const secondaryLight = '#FFFFFF';
// const secondaryDark = '#FFFFFF';
const darkMystery = '#1C2545';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // ? Main Title
        h1: {
          color: white,
        },
        // ? Hero Banner Titles
        h2: {
          color: primaryDark,
        },
        // ? Hero Banner Sub Titles
        h3: {
          color: primaryDark,
        },
        // ? Card & Category Titles
        h4: {
          color: primaryDark,
        },
        // ? Card & Category Sub Titles
        h5: {
          color: primaryDark,
        },
        // // ? Card & Category Secondary Sub Titles
        // h6: {
        //   color: primaryDark,
        // },
        button: {
          color: primaryDark,
        },
      },
    },
  },
  palette: {
    white: white,
    softWhite: white2,
    softerWhite: white3,
    black: black,
    softBlack: black2,
    softerBlack: black3,
    darkMystery: darkMystery,
    orange: '#FF7840',
    red: '#AB1139',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      paper: white2,
    },
    textPrimary: {
      color: black,
    },
  },
  typography: {
    h1: {
      fontFamily: [
        'DrawBack-Elegant',
        'cursive',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(1.8rem + 1.8vmin)',
      margin: '8px 0 0 8px',
    },
    h2: {
      fontFamily: [
        'DrawBack-Elegant',
        'cursive',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(1.5rem + 1.7vmin)',
      paddingTop: '0.65em',
      paddingRight: '0.5em',
      marginLeft: '0.65em',
    },
    h3: {
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(1.1rem + 1.1vmin)',
    },
    h4: {
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(1.05rem + 1.05vmin)',
    },
    h5: {
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(.95rem + .95vmin)',
    },
    h6: {
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(.8rem + .8vmin)',
    },
    subtitle1: {
      color: primaryDark,
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(.8rem + .8vmin)',
    },
    subtitle2: {
      color: primaryDark,
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'bold',
      fontSize: 'calc(.55rem + .6vmin)',
    },
    body1: {
      color: black,
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'normal',
      wordBreak: 'break-word',
      fontSize: 'calc(.5rem + .5vmin)',
    },
    body2: {
      color: white,
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeight: 'normal',
      wordBreak: 'break-word',
      fontSize: 'calc(.5rem + .5vmin)',
    },
    button: {
      fontSize: '.65rem',
      fontWeight: 'bold',
      wordBreak: 'keep-all',
    },
  },
  shape: {
    borderRadius: 8,
  },
  // ? ClassNames
  fullWidth: {
    width: '100%',
  },
});

export default theme;
