import React, { 
  useState, 
  useEffect,
} from 'react';

import { array, bool, func, number, shape, string } from 'prop-types';
import { compose } from 'redux';
import { intlShape, injectIntl } from '../../util/reactIntl';
import pickBy from 'lodash/pickBy';
import ClassNames from 'classnames';
import config from '../../config';
import routeConfiguration from '../../routeConfiguration';
import { withViewport } from '../../util/contextHelpers';
import { parse, stringify } from '../../util/urlHelpers';
import { createResourceLocatorString, pathByRouteName } from '../../util/routes';
import { propTypes } from '../../util/types';
import PropTypes from 'prop-types';

import {
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExploreIcon from '@material-ui/icons/Explore';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
  NamedLink,
} from '../../components';
import MainDrawer from '../MainDrawer/MainDrawer';
import AccountDrawer from '../AccountDrawer/AccountDrawer';
import { unset } from 'lodash';

// ? MaterialUI Template Dashboard Drawer with permanent icons
{/* <AppBar position='absolute' className={ clsx(classes.appBar, open && classes.appBarShift) }>
<Toolbar className={ classes.toolbar }>
  <IconButton
    edge='start'
    color='inherit'
    aria-label='open drawer'
    onClick={ handleDrawerOpen }
    className={ clsx(classes.menuButton, open && classes.menuButtonHidden) }
  >
    <MenuIcon />
  </IconButton>
  <Typography component='h1' variant='h6' color='inherit' noWrap className={ classes.title }>
    Dashboard
  </Typography>
  <IconButton color='inherit'>
    <Badge badgeContent={ 4 } color='secondary'>
      <NotificationsIcon />
    </Badge>
  </IconButton>
</Toolbar>
</AppBar>
<Drawer
variant='permanent'
classes={ {
  paper: clsx(classes.drawerPaper, ! open && classes.drawerPaperClose),
} }
open={ open }
>
<div className={ classes.toolbarIcon }>
  <IconButton onClick={ handleDrawerClose }>
    <ChevronLeftIcon />
  </IconButton>
</div>
<Divider />
<List>{mainListItems}</List>
<Divider />
<List>{secondaryListItems}</List>
</Drawer> */}

// ? ShareTribe
// const redirectToURLWithModalState = (props, modalStateParam) => {
//   const { history, location } = props;
//   const { pathname, search, state } = location;
//   const searchString = `?${stringify({ [modalStateParam]: 'open', ...parse(search) })}`;
//   history.push(`${pathname}${searchString}`, state);
// };

// const redirectToURLWithoutModalState = (props, modalStateParam) => {
//   const { history, location } = props;
//   const { pathname, search, state } = location;
//   const queryParams = pickBy(parse(search), (v, k) => {
//     return k !== modalStateParam;
//   });
//   const stringified = stringify(queryParams);
//   const searchString = stringified ? `?${stringified}` : '';
//   history.push(`${pathname}${searchString}`, state);
// };

// const GenericError = props => {
//   const { show } = props;
//   const classes = classNames(css.genericError, {
//     [css.genericErrorVisible]: show,
//   });
//   return (
//     <div className={classes}>
//       <div className={css.genericErrorContent}>
//         <p className={css.genericErrorText}>
//           <FormattedMessage id="Topbar.genericError" />
//         </p>
//       </div>
//     </div>
//   );
// };
// GenericError.propTypes = {
//   show: bool.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  // mainTitle: {
  //   textDecoration: 'none',
  // },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: theme.fullWidth,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: theme.fullWidth,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    minWidth: 300,
  },
  sectionDesktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sellButton: {
    height: '75%',
    color: theme.palette.white,
    borderColor: theme.palette.white,
    borderRadius: 8,
    alignSelf: 'center',
    marginRight: 15,
    fontWeight: 'bold',
  },
  badge: {
    color: theme.palette.red,
  },
}));

const Topbar = (props) => {
  const classes = useStyles();
  const {
    isAuthenticated,
    currentUserListing,
    currentUserListingFetched,
    currentUserHasOrders,
    currentPage,
    notificationCount,
    viewport,
    intl,
    location,
    onManageDisableScrolling,
    onResendVerificationEmail,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    showGenericError,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    redirectToURLWithModalState(props, 'mobilemenu');
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    redirectToURLWithoutModalState(props, 'mobilemenu');
  };
  const handleMobileSearchOpen = () => {
    redirectToURLWithModalState(props, 'mobilesearch');
  };
  const handleMobileSearchClose = () => {
    redirectToURLWithoutModalState(props, 'mobilesearch');
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSubmit = (values) => {
    const { currentSearchParams } = props;
    const { search, selectedPlace } = values.location;
    const { history } = props;
    const { origin, bounds } = selectedPlace;
    const originMaybe = config.sortSearchByDistance ? { origin } : {};
    const searchParams = {
      ...currentSearchParams,
      ...originMaybe,
      address: search,
      bounds,
    };
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, searchParams));
  };

  const handleLogout = () => {
    const { onLogout, history } = props;
    onLogout().then(() => {
      const path = pathByRouteName('LandingPage', routeConfiguration());
      // In production we ensure that data is really lost,
      // but in development mode we use stored values for debugging
      if (config.dev) {
        history.push(path);
      } else if (typeof window !== 'undefined') {
        window.location = path;
      }
      console.log('logged out'); // eslint-disable-line
    });
  };

  // const { mobilemenu, mobilesearch, address, origin, bounds } = parse(location.search, {
  //   latlng: ['origin'],
  //   latlngBounds: ['bounds'],
  // });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const SignupLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage">
      <Button id="Topbar.signup">
        Sign up
      </Button>
    </NamedLink>
  );

  const ListingLink =
    authenticatedOnClientSide && currentUserListingFetched && currentUserListing ? (
      <div
        listing={currentUserListing}
        children={
          <span>
            <div id="Topbar.viewListing" />
          </span>
        }
      />
    ) : null;

  const CreateListing =
    isAuthenticatedOrJustHydrated && !(currentUserListingFetched && !currentUserListing) ? null : (
      <NamedLink name='NewListingPage'>
        <Button variant='outlined' className={ classes.sellButton }>
          Sell
        </Button>
      </NamedLink>
    );

  // ! Notification Menu
  const menuId = 'primary-search-account-menu';
  const notificationMenu = (
    <Menu
      keepMounted
      id={ menuId }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
      anchorEl={ anchorEl }
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
    >
      <MenuItem onClick={ handleMenuClose }>Offers</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Messages</MenuItem>
    </Menu>
  );

  return (
    <div className='blue-bg-wrap'>
      <div className='appbar-wrap'>
        <AppBar position='static' elevation={ 0 }>
          <Toolbar id='back-to-top-anchor'>
            <MainDrawer />
            <NamedLink name='LandingPage'>
              <Typography
                className={ classes.maintitle }
                variant='h1'
                nowrap='true'
              >
                DrawBack Billiards
              </Typography>
            </NamedLink>
            <div className={ classes.search }>
              <div className={ classes.searchIcon }>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={ {
                  root: classes.inputRoot,
                  input: classes.inputInput,
                } }
                inputProps={ { 'aria-label': 'search' } }
              />
            </div>
            <div className={ classes.grow } />
            <div className={ ClassNames(classes.sectionDesktop, 'flex-row-center-around')}>
              {CreateListing}
              <IconButton aria-label='My feed' color='inherit'>
                <ExploreIcon />
              </IconButton>
              <IconButton aria-label='favorites' color='inherit'>
                <TrackChangesIcon />
              </IconButton>
              <IconButton aria-label='shopping cart' color='inherit'>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                aria-label='notifications icon'
                color='inherit'
              >
                <Badge badgeContent={ 7 } color='secondary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {SignupLink}
            </div>
              <AccountDrawer />
          </Toolbar>
        </AppBar>
      </div>
      <div id='blue-appbar2' />
    </div>
  );
};

export default Topbar;

Topbar.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {},
  currentUserListing: null,
  currentUserListingFetched: false,
};

const { node } = PropTypes;

Topbar.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

