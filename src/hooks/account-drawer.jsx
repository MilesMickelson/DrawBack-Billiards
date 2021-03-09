import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StoreIcon from '@material-ui/icons/Store';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ListIcon from '@material-ui/icons/List';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import RedeemIcon from '@material-ui/icons/Redeem';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PageviewIcon from '@material-ui/icons/Pageview';
import ChatIcon from '@material-ui/icons/Chat';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  drawerMenu: {
    color: theme.palette.primary.main,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    width: 255,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  menuIcon: {
    color: theme.palette.white,
  },
}));

const AccountDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={ classes.list }
      role='presentation'
      onClick={ toggleDrawer(anchor, false) }
      onKeyDown={ toggleDrawer(anchor, false) }
    >
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><StoreIcon color='primary' /></ListItemIcon>
          <ListItemText>My Shop</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><SettingsApplicationsIcon color='primary' /></ListItemIcon>
          <ListItemText>Shop Settings</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ListIcon color='primary' /></ListItemIcon>
          <ListItemText>Listings</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><LocalShippingIcon color='primary' /></ListItemIcon>
          <ListItemText>Orders</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><DashboardIcon color='primary' /></ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </List>
      <Divider className={ classes.divider } />
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><PaymentIcon color='primary' /></ListItemIcon>
          <ListItemText>Purchases</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><RedeemIcon color='primary' /></ListItemIcon>
          <ListItemText>Gift Cards</ListItemText>
        </ListItem>
      </List>
      <Divider className={ classes.divider } />
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><MonetizationOnIcon color='primary' /></ListItemIcon>
          <ListItemText>Earnings</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><AccountBalanceIcon color='primary' /></ListItemIcon>
          <ListItemText>My Bill</ListItemText>
        </ListItem>
      </List>
      <Divider className={ classes.divider } />
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><PageviewIcon color='primary' /></ListItemIcon>
          <ListItemText>Recently Viewed</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ChatIcon color='primary' /></ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><AccountCircle color='primary' /></ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><HelpOutlineIcon color='primary' /></ListItemIcon>
          <ListItemText>Help Center</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ExitToAppIcon color='primary' /></ListItemIcon>
          <ListItemText>Log Out</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={ anchor }>
          <IconButton edge='end' aria-label='open drawer' onClick={ toggleDrawer(anchor, true) }>
            <AccountCircle aria-label='user account' className={ classes.menuIcon }>
              {anchor}
            </AccountCircle>
          </IconButton>
          <SwipeableDrawer
            anchor={ anchor }
            open={ state[anchor] }
            onClose={ toggleDrawer(anchor, false) }
            onOpen={ toggleDrawer(anchor, true) }
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AccountDrawer;
