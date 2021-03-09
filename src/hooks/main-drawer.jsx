import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness4Icon from '@material-ui/icons/Brightness4';
// import Brightness7Icon from '@material-ui/icons/Brightness7';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import EventIcon from '@material-ui/icons/Event';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ForumIcon from '@material-ui/icons/Forum';
import ClassIcon from '@material-ui/icons/Class';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MenuIcon from '@material-ui/icons/Menu';

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

const MainDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
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
          <ListItemIcon><LocalActivityIcon color='primary' /></ListItemIcon>
          <ListItemText>Local League</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><LocalAtmIcon color='primary' /></ListItemIcon>
          <ListItemText>Local Tournaments</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><EventIcon color='primary' /></ListItemIcon>
          <ListItemText>Pro Tours and Events</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><NewReleasesIcon color='primary' /></ListItemIcon>
          <ListItemText>DrawBack Digest</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ForumIcon color='primary' /></ListItemIcon>
          <ListItemText>Chalk-About-It Forums</ListItemText>
        </ListItem>
      </List>
      <Divider className={ classes.divider } />
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><ClassIcon color='primary' /></ListItemIcon>
          <ListItemText>Pool Masterclasses</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><GroupIcon color='primary' /></ListItemIcon>
          <ListItemText>1v1 Lessons with Professionals</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><GroupAddIcon color='primary' /></ListItemIcon>
          <ListItemText>1v1 Pool Advice by Professionals</ListItemText>
        </ListItem>
      </List>
      <Divider className={ classes.divider } />
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><MonetizationOnIcon color='primary' /></ListItemIcon>
          <ListItemText>Buying and Selling</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><AnnouncementIcon color='primary' /></ListItemIcon>
          <ListItemText>Wanted Ads</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><ControlCameraIcon color='primary' /></ListItemIcon>
          <ListItemText>Pool Table Movers</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonAddIcon color='primary' /></ListItemIcon>
          <ListItemText>Verifying</ListItemText>
        </ListItem>
      </List>
      <Divider className={ classes.divider } />
      <List className={ classes.drawerMenu }>
        <ListItem button>
          <ListItemIcon><Brightness4Icon color='primary' /></ListItemIcon>
          <ListItemText>Dark Mode</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><AllInclusiveIcon color='primary' /></ListItemIcon>
          <ListItemText>DrawBack GiveBack</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon><InfoIcon color='primary' /></ListItemIcon>
          <ListItemText>About Us</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={ anchor }>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={ toggleDrawer(anchor, true) }
          >
            <MenuIcon className={ classes.menuIcon }>
              {anchor}
            </MenuIcon>
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

export default MainDrawer;
