import React from 'react';

import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import {
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EcoSharpIcon from '@material-ui/icons/EcoSharp';
import AccessibilityNewSharpIcon from '@material-ui/icons/AccessibilityNewSharp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import AllInclusiveSharpIcon from '@material-ui/icons/AllInclusiveSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';

import MainDrawer from '../../hooks/main-drawer';
import AccountDrawer from '../../hooks/account-drawer';
import Fab from './fab';

const useStyles = makeStyles((theme) => ({
  footerBg: {
    backgroundColor: theme.palette.primary.dark,
    paddingBottom: theme.spacing(1),
  },
  appbarContainer: {
    width: theme.fullWidth,
    backgroundColor: theme.palette.primary.main,
  },
  appbarWrap: {
    maxWidth: 1360,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.2),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: theme.fullWidth,
    maxWidth: 375,
    minWidth: 300,
    flexGrow: 1,
  },
  subscribeIcon: {
    padding: theme.spacing(0.75, 1.5),
    position: 'absolute',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: theme.fullWidth,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  footerWrap: {
    width: theme.fullWidth,
    height: 225,
    maxWidth: 1100,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 15,
  },
  buttonsWrap: {
    width: theme.fullWidth,
    maxWidth: 1100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  setButton: {
    color: theme.palette.white,
    borderColor: theme.palette.white,
  },
  downloadButton: {
    color: theme.palette.white,
    borderColor: theme.palette.white,
  },
  downloadIcon: {
    marginRight: 5,
  },
  iconRowContainer: {
    width: theme.fullWidth,
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(1),
  },
  iconRowWrap: {
    width: theme.fullWidth,
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 5,
  },
  footerIcon: {
    color: theme.palette.white,
    float: 'left',
    marginRight: 10,
  },
  termsConditions: {
    width: theme.fullWidth,
    maxWidth: 1200,
    margin: '1% auto 0 auto',
  },
  termsButton: {
    color: theme.palette.white,
  },
}));

const LayoutWrapperFooter = props => {
  // const { className, rootClassName, children } = props;
  // const classes = classNames(rootClassName || css.root, className);
  // <div className={classes}>{children}</div>;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ menuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ handleMenuClose }>My Shop</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Shop Settings</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Listings</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Orders</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Dashboard</MenuItem>
      <Divider />
      <MenuItem onClick={ handleMenuClose }>Purchases</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Gift Cards</MenuItem>
      <Divider />
      <MenuItem onClick={ handleMenuClose }>Earnings</MenuItem>
      <MenuItem onClick={ handleMenuClose }>My Bill</MenuItem>
      <Divider />
      <MenuItem onClick={ handleMenuClose }>Recently Viewed</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Messages</MenuItem>
      <MenuItem onClick={ handleMenuClose }>My Profile</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Help Center</MenuItem>
      <Divider />
      <MenuItem onClick={ handleMenuClose }>Log Out</MenuItem>
    </Menu>
  );

  const notificationMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ menuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ handleMenuClose }>Offers</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Messages</MenuItem>
    </Menu>
  );

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
    <div className={ classes.footerBg }>
      <div id='blue-bar' />
      <div className={ classes.appbarContainer }>
        <div className={ classes.appbarWrap }>
          <AppBar position='static' elevation={ 0 }>
            <Toolbar id='back-to-top-anchor'>
              <MainDrawer />
              <div id='drawBack'>DrawBack&nbsp;Billiards</div>
              <div className={ classes.search }>
                <div className={ classes.subscribeIcon }>
                  <SubscriptionsIcon fontSize='small' />
                </div>
                <InputBase
                  placeholder='Email Address'
                  classes={ {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  } }
                  inputProps={ { 'aria-label': 'search' } }
                />
              </div>
              <div className='flex-grow' />
              <IconButton color='inherit'>
                <YouTubeIcon fontSize='large' />
              </IconButton>
              <IconButton color='inherit'>
                <TwitterIcon fontSize='large' />
              </IconButton>
              <IconButton color='inherit'>
                <InstagramIcon fontSize='large' />
              </IconButton>
              <IconButton color='inherit'>
                <PinterestIcon fontSize='large' />
              </IconButton>
              <AccountDrawer />
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
          {renderMobileMenu}
          {renderMenu}
        </div>
      </div>
      <div className={ ClassNames(classes.footerWrap, 'flex-col-center-between') }>
        <div>
          <Typography variant='h6'>Shop on DrawBack</Typography>
          <ul>
            <li><Typography variant='body2'>Categories</Typography></li>
            <li><Typography variant='body2'>Brands</Typography></li>
            <li><Typography variant='body2'>Shops</Typography></li>
            <li><Typography variant='body2'>Handpicked Collections</Typography></li>
            <li><Typography variant='body2'>Recently Viewed</Typography></li>
            <li><Typography variant='body2'>Handmade Pool Cues</Typography></li>
            <li><Typography variant='body2'>Pool Tables</Typography></li>
            <li><Typography variant='body2'>Staff Picks</Typography></li>
          </ul>
        </div>
        <div>
          <Typography variant='h6'>Sell on DrawBack</Typography>
          <ul>
            <li><Typography variant='body2'>Seller Hub</Typography></li>
            <li><Typography variant='body2'>Payments FAQ</Typography></li>
            <Typography variant='h6' id='company-header'>Company</Typography>
            <li><Typography variant='body2'>About DrawBack</Typography></li>
            <li><Typography variant='body2'>Careers</Typography></li>
            <li><Typography variant='body2'>Press</Typography></li>
            <li><Typography variant='body2'>DrawBack GiveBack</Typography></li>
          </ul>
        </div>
        <div>
          <Typography variant='h6'>Resources</Typography>
          <ul>
            <li><Typography variant='body2'>DrawBack Digest</Typography></li>
            <li><Typography variant='body2'>Value Guides</Typography></li>
            <li><Typography variant='body2'>Buying Guides</Typography></li>
            <li><Typography variant='body2'>Gift Cards</Typography></li>
            <li><Typography variant='body2'>Refer-a-Friend</Typography></li>
            <li><Typography variant='body2'>New and Popular</Typography></li>
          </ul>
        </div>
        <div>
          <Typography variant='h6'>Help & Tools</Typography>
          <ul>
            <li><Typography variant='body2'>Help Center</Typography></li>
            <li><Typography variant='body2'>Contact Support</Typography></li>
            <li><Typography variant='body2'>DrawBack Protection</Typography></li>
            <li><Typography variant='body2'>Download Mobile App</Typography></li>
            <li><Typography variant='body2'>My Store Add-ons</Typography></li>
            <li><Typography variant='body2'>API & Integrations</Typography></li>
            <li><Typography variant='body2'>Affiliate Program</Typography></li>
          </ul>
        </div>
        <div>
          <Typography variant='h6'>Contact Us</Typography>
          <ul>
            <li>
              Email:&nbsp;
              <a className='phone-email' href='mailto:milesmickelson87@gmail.com?subject=DrawBack Support Request'>
                support@drawbackbilliards.com
              </a>
            </li>
            <li>
              Toll Free:&nbsp;
              <a id='local-phone' className='phone-email' href='tel:+15555555555'>1-614-555-5555</a>
            </li>
            <li>
              International:&nbsp;
              <a className='phone-email' href='tel:+15555555555'>1-614-555-5555</a>
            </li>
            <li>Hours: Monday-Friday 9-5 EST</li>
            <li>
              <address>
                100 Grandview Central
                <br />
                Columbus, OH 43212 USA
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className={ ClassNames(classes.buttonsWrap, 'flex-row-center-around') }>
        <ButtonGroup size='small' aria-label='location, language, and currency'>
          <Button className={ classes.setButton }><LanguageSharpIcon /></Button>
          <Button className={ classes.setButton }>U.S. Continental</Button>
          <Button className={ classes.setButton }>English</Button>
          <Button className={ classes.setButton }>$USD</Button>
        </ButtonGroup>
        <div>
          <Button size='small' className={ classes.downloadButton } id='apple-button' variant='outlined'>
            <AppleIcon className={ classes.downloadIcon } />
            App Store
          </Button>
          <Button size='small' className={ classes.downloadButton } variant='outlined'>
            <ShopIcon className={ classes.downloadIcon } />
            Google Play
          </Button>
        </div>
      </div>
      <div id='footer-break' />
      <div className={ classes.iconRowContainer }>
        <div className={ ClassNames(classes.iconRowWrap, 'flex-row-center-evenly') }>
          <div className='icon-row-item'>
            <EcoSharpIcon fontSize='large' className={ classes.footerIcon } />
            <Typography variant='body2'>
              Every used purchase helps support the sustainability of forests vital to our planets future and species.
            </Typography>
          </div>
          <div className='icon-row-item'>
            <AccessibilityNewSharpIcon fontSize='large' className={ classes.footerIcon } />
            <Typography variant='body2'>
              We strive to make our platform, services, and support 100% accessible and user-friendly for everyone.
            </Typography>
          </div>
          <div className='icon-row-item'>
            <AllInclusiveSharpIcon fontSize='large' className={ classes.footerIcon } />
            <Typography variant='body2'>
              Every purchase made also helps support the local and worldwide pool community through the funding of youth programs.
            </Typography>
          </div>
          <div className='icon-row-item'>
            <DeleteForeverIcon fontSize='large' className={ classes.footerIcon } />
            <Typography variant='body2'>
              Team DrawBack will always strive to reduce waste, recycle, and minify the use of plastic.
            </Typography>
          </div>
        </div>
      </div>
      <div className={ ClassNames(classes.termsConditions, 'flex-row-center-evenly') }>
        <Button className={ classes.termsButton }>Terms and Conditions</Button>
        <Button className={ classes.termsButton }>
          <Typography variant='h6'>
            ©DrawBack Billiards
          </Typography>
        </Button>
        <Button className={ classes.termsButton }>Privacy Policy</Button>
      </div>
      <Fab />
    </div>
  );
};

LayoutWrapperFooter.defaultProps = {
  className: null,
  rootClassName: null,
};

const { node, string } = PropTypes;

LayoutWrapperFooter.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default LayoutWrapperFooter;
