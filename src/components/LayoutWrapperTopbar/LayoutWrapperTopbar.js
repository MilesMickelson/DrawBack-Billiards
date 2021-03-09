import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

import css from './LayoutWrapperTopbar.module.css';

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

const LayoutWrapperTopbar = props => {
  const { className, rootClassName, children } = props;
  // const classes = classNames(rootClassName || css.root, className);
  const [value, setValue] = React.useState(0);
  const jss = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <AppBar position='static' color='default'>
        <div className={ jss.tabWrap }>
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
              className={ jss.tabLink }
            />
            <Tab
              label='Buying'
              className={ jss.tabLink }
              icon={ <ShoppingCartIcon color='primary' /> }
              {...a11yProps(1)}
            />
            <Tab
              label='Selling'
              className={ jss.tabLink }
              icon={ <LocalOfferIcon color='primary' /> }
              {...a11yProps(2)}
            />
            <Tab
              label='Messages'
              className={ jss.tabLink }
              icon={ <AllInboxIcon color='primary' /> }
              {...a11yProps(3)}
            />
            <Tab
              label='Feedback'
              className={ jss.tabLink }
              icon={ <FeedbackIcon color='primary' /> }
              {...a11yProps(4)}
            />
            <Tab
              label='Earnings'
              className={ jss.tabLink }
              icon={ <MonetizationOnIcon color='primary' /> }
              {...a11yProps(5)}
            />
            <Tab
              label='Shop Settings'
              className={ jss.tabLink }
              icon={ <StoreIcon color='primary' /> }
              {...a11yProps(6)}
            />
            <Tab
              label='My Account'
              className={ jss.tabLink }
              icon={ <SettingsIcon color='primary' /> }
              {...a11yProps(7)}
            />
          </Tabs>
        </div>
      </AppBar>
      <main className='nine-sixty-max'>
        <TabPanel value={ value } index={ 0 }>
          {/* <Dashboard /> */}
          <div className={ jss.tempSpacer }>Dashboard</div>
        </TabPanel>
        <TabPanel value={ value } index={ 1 }>
          <div className={ jss.tempSpacer }>Buying</div>
        </TabPanel>
        <TabPanel value={ value } index={ 2 }>
          <div className={ jss.tempSpacer }>Selling</div>
        </TabPanel>
        <TabPanel value={ value } index={ 3 }>
          <div className={ jss.tempSpacer }>Messages</div>
        </TabPanel>
        <TabPanel value={ value } index={ 4 }>
          <div className={ jss.tempSpacer }>Feedback</div>
        </TabPanel>
        <TabPanel value={ value } index={ 5 }>
          <div className={ jss.tempSpacer }>Earnings</div>
        </TabPanel>
        <TabPanel value={ value } index={ 6 }>
          <div className={ jss.tempSpacer }>Shop Settings</div>
        </TabPanel>
        <TabPanel value={ value } index={ 7 }>
          <div className={ jss.tempSpacer }>My Account</div>
        </TabPanel>
      </main>
    </>
  );
};

LayoutWrapperTopbar.defaultProps = {
  className: null,
  rootClassName: null,
};

const { node, string } = PropTypes;

LayoutWrapperTopbar.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default LayoutWrapperTopbar;
