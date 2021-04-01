import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';

import {
  Dashboard,
} from '../../components';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role='tabpanel'
      hidden={ value !== index }
      id={ `scrollable-force-tabpanel-${index}` }
      aria-labelledby={ `scrollable-force-tab-${index}` }
      { ...other }
    >
      {value === index && (
        <Box p={ 3 }>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabWrap: {
    maxWidth: 1260,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tabLink: {
    color: theme.palette.primary.dark,
  },
  tempSpacer: {
    height: 500,
  },
}));

const DashboardBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position='static' color='default'>
        <div className={ classes.tabWrap }>
          <Tabs
            variant='standard'
            indicatorColor='primary'
            textColor='primary'
            value={ value }
            onChange={ handleChange }
          >
            <Tab
              label='Dashboard'
              icon={ <DashboardIcon color='primary' /> }
              {...a11yProps(0)}
              className={ classes.tabLink }
            />
            <Tab
              label='Buying'
              className={ classes.tabLink }
              icon={ <ShoppingCartIcon color='primary' /> }
              {...a11yProps(1)}
            />
            <Tab
              label='Selling'
              className={ classes.tabLink }
              icon={ <LocalOfferIcon color='primary' /> }
              {...a11yProps(2)}
            />
            <Tab
              label='Messages'
              className={ classes.tabLink }
              icon={ <AllInboxIcon color='primary' /> }
              {...a11yProps(3)}
            />
            <Tab
              label='Feedback'
              className={ classes.tabLink }
              icon={ <FeedbackIcon color='primary' /> }
              {...a11yProps(4)}
            />
            <Tab
              label='Earnings'
              className={ classes.tabLink }
              icon={ <MonetizationOnIcon color='primary' /> }
              {...a11yProps(5)}
            />
            <Tab
              label='Shop Settings'
              className={ classes.tabLink }
              icon={ <StoreIcon color='primary' /> }
              {...a11yProps(6)}
            />
            <Tab
              label='My Account'
              className={ classes.tabLink }
              icon={ <SettingsIcon color='primary' /> }
              {...a11yProps(7)}
            />
          </Tabs>
        </div>
      </AppBar>
      <main className='nine-sixty-max'>
        <TabPanel value={ value } index={ 0 }>
          <Dashboard />
        {/* <div className={ classes.tempSpacer }>Dashboard</div> */}
        </TabPanel>
        <TabPanel value={ value } index={ 1 }>
          <div className={ classes.tempSpacer }>Buying</div>
        </TabPanel>
        <TabPanel value={ value } index={ 2 }>
          <div className={ classes.tempSpacer }>Selling</div>
        </TabPanel>
        <TabPanel value={ value } index={ 3 }>
          <div className={ classes.tempSpacer }>Messages</div>
        </TabPanel>
        <TabPanel value={ value } index={ 4 }>
          <div className={ classes.tempSpacer }>Feedback</div>
        </TabPanel>
        <TabPanel value={ value } index={ 5 }>
          <div className={ classes.tempSpacer }>Earnings</div>
        </TabPanel>
        <TabPanel value={ value } index={ 6 }>
          <div className={ classes.tempSpacer }>Shop Settings</div>
        </TabPanel>
        <TabPanel value={ value } index={ 7 }>
          <div className={ classes.tempSpacer }>My Account</div>
        </TabPanel>
      </main>
    </>
  );
};

export default DashboardBar;

