import React, { 
  useState, 
  useEffect,
} from 'react';

import { array, bool, func, number, shape, string } from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl';
import pickBy from 'lodash/pickBy';
import classNames from 'classnames';
import config from '../../config';
import routeConfiguration from '../../routeConfiguration';
import { withViewport } from '../../util/contextHelpers';
import { parse, stringify } from '../../util/urlHelpers';
import { createResourceLocatorString, pathByRouteName } from '../../util/routes';
import { propTypes } from '../../util/types';

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
import { Divider } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExploreIcon from '@material-ui/icons/Explore';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
  LimitedAccessBanner,
  Logo,
  Modal,
  ModalMissingInformation,
  NamedLink,
  TopbarDesktop,
  TopbarMobileMenu,
} from '../../components';
import MainDrawer from '../MainDrawer/MainDrawer';
import AccountDrawer from '../AccountDrawer/AccountDrawer';

const redirectToURLWithModalState = (props, modalStateParam) => {
  const { history, location } = props;
  const { pathname, search, state } = location;
  const searchString = `?${stringify({ [modalStateParam]: 'open', ...parse(search) })}`;
  history.push(`${pathname}${searchString}`, state);
};

const redirectToURLWithoutModalState = (props, modalStateParam) => {
  const { history, location } = props;
  const { pathname, search, state } = location;
  const queryParams = pickBy(parse(search), (v, k) => {
    return k !== modalStateParam;
  });
  const stringified = stringify(queryParams);
  const searchString = stringified ? `?${stringified}` : '';
  history.push(`${pathname}${searchString}`, state);
};

const GenericError = props => {
  const { show } = props;
  const classes = classNames(css.genericError, {
    [css.genericErrorVisible]: show,
  });
  return (
    <div className={classes}>
      <div className={css.genericErrorContent}>
        <p className={css.genericErrorText}>
          <FormattedMessage id="Topbar.genericError" />
        </p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
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
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sellButton: {
    height: '75%',
    color: '#ffffff',
    borderColor: '#ffffff',
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
  const {
    className,
    rootClassName,
    desktopClassName,
    mobileRootClassName,
    mobileClassName,
    isAuthenticated,
    authScopes,
    authInProgress,
    currentUser,
    currentUserHasListings,
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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = () => {
    redirectToURLWithModalState(props, 'mobilemenu');
  };

  const handleMobileMenuClose = () => {
    redirectToURLWithoutModalState(props, 'mobilemenu');
  };

  const handleMobileSearchOpen = () => {
    redirectToURLWithModalState(props, 'mobilesearch');
  };

  const handleMobileSearchClose = () => {
    redirectToURLWithoutModalState(props, 'mobilesearch');
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

  const { mobilemenu, mobilesearch, address, origin, bounds } = parse(location.search, {
    latlng: ['origin'],
    latlngBounds: ['bounds'],
  });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const signupLink = isAuthenticatedOrJustHydrated ? null : (
    <div name="SignupPage">
      <span>
        <div id="TopbarDesktop.signup" />
      </span>
    </div>
  );

  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage">
      <Button id="TopbarDesktop.signup">
      Sign up
      </Button>
    </NamedLink>
  );

  const listingLink =
    authenticatedOnClientSide && currentUserListingFetched && currentUserListing ? (
      <div
        listing={currentUserListing}
        children={
          <span>
            <div id="TopbarDesktop.viewListing" />
          </span>
        }
      />
    ) : null;

  const CreateListing =
    isAuthenticatedOrJustHydrated && !(currentUserListingFetched && !currentUserListing) ? null : (
      <Button variant='outlined' className={ classes.sellButton }>
        Sell
      </Button>
    );

  // ! Mobile Menu
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ mobileMenuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <Divider />
      <Divider />
    </Menu>
  );

  return (
    <>
      <TopbarDesktop
        className={desktopClassName}
        currentUserHasListings={currentUserHasListings}
        currentUserListing={currentUserListing}
        currentUserListingFetched={currentUserListingFetched}
        currentUser={currentUser}
        currentPage={currentPage}
        initialSearchFormValues={initialSearchFormValues}
        intl={intl}
        isAuthenticated={isAuthenticated}
        notificationCount={notificationCount}
        onLogout={handleLogout}
        onSearchSubmit={handleSubmit}
      />
        {renderMobileMenu}
      <div id='blue-appbar2' />
    </>
  );
};

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

const { node, string } = PropTypes;

Topbar.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default Topbar;
