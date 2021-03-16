import React, { 
  useState, 
  useEffect,
} from 'react';

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
  NamedLink,
} from '../../components';
import MainDrawer from '../MainDrawer/MainDrawer';
import AccountDrawer from '../AccountDrawer/AccountDrawer';

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

const TopbarDesktop = (props) => {
  const {
    anchorEl,
    isMenuOpen,
    CreateListing,
    handleMenuClose,
    handleMobileMenuOpen,
    className,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    currentUserListing,
    currentUserListingFetched,
    notificationCount,
    intl,
    isAuthenticated,
    mobileMenuId,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues,
    ListingLink,
    SignupLink,
    LoginLink
  } = props;
  const classes = useStyles();

  return (
    <div className='blue-bg-wrap'>
      <div className='appbar-wrap'>
        <AppBar position='static' elevation={ 0 }>
          <Toolbar id='back-to-top-anchor'>
            <MainDrawer />
            <Typography variant='h1' nowrap='true'>
              DrawBack Billiards
            </Typography>
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
            <div className={ classes.sectionDesktop }>
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
              {LoginLink}
              <AccountDrawer />
            </div>
            <div className={ classes.sectionMobile }>
              <IconButton
                aria-label='show more'
                aria-controls={ mobileMenuId }
                aria-haspopup='true'
                onClick={ handleMobileMenuOpen }
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div id='blue-appbar2' />
    </div>
  );
};

TopbarDesktop.defaultProps = {
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

TopbarDesktop.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default TopbarDesktop;
