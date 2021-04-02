/* eslint-disable arrow-body-style */
import React from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import clsx from 'clsx';
import ClassNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const MyProfilePic = require('../../assets/profile.jpg');

const data = [
  {
    name: 'Monday',
    Sales: 2000,
    Purchases: 475,
    amt: 0,
  },
  {
    name: 'Tuesday',
    Sales: 300,
    Purchases: 1560,
    amt: 0,
  },
  {
    name: 'Wednesday',
    Sales: 952,
    Purchases: 180,
    amt: 0,
  },
  {
    name: 'Thursday',
    Sales: 1100,
    Purchases: 900,
    amt: 0,
  },
  {
    name: 'Friday',
    Sales: 1212,
    Purchases: 345,
    amt: 0,
  },
  {
    name: 'Saturday',
    Sales: 1390,
    Purchases: 175,
    amt: 0,
  },
  {
    name: 'Sunday',
    Sales: 170,
    Purchases: 575,
    amt: 0,
  },
];

const DashboardChart = () => {
  return (
    <BarChart
      width={ 860 }
      height={ 300 }
      data={ data }
      margin={ {
        top: 20,
        right: 0,
        left: 0,
        bottom: 20,
      } }
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Sales' fill='#007faa' />
      <Bar dataKey='Purchases' fill='#1C2545' />
    </BarChart>
  );
};

const useStyles = makeStyles((theme) => ({
  profileCard: {
    width: '25%',
    boxShadow: '1px 1px 5px #404040',
    paddingBottom: 12,
    verticalAlign: 'top',
  },
  badgeCard: {
    width: '73.5%',
    boxShadow: '1px 1px 5px #404040',
    verticalAlign: 'top',
  },
  fullCard: {
    width: '100%',
    boxShadow: '1px 1px 5px #404040',
    marginTop: '2%',
  },
  imgWrapper: {
    textAlign: 'center',
    paddingTop: 10,
  },
  profilePic: {
    width: '92%',
    borderRadius: 6,
  },
  // ? Material-UI ButtonGroup-No Flexbox w/Sass
  verticalWrap: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'start',
    marginTop: 15,
  },
  button: {
    marginTop: 2,
    width: '100%',
  },
  overviewButton: {
    width: '100%',
    marginTop: 2,
  },
  badge: {
    width: '32%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  progressBar: {
    width: '75%',
    marginTop: 12,
    marginRight: 'auto',
    marginBottom: 6,
    marginLeft: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    minWidth: 175,
    maxWidth: 250,
    width: '20%',
  },
  // ? Material-UI ButtonGroup-No Flexbox w/Sass
  graphWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
}));

function LinearDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={ classes.progressBar }>
      <LinearProgress variant='determinate' value={ progress } />
    </div>
  );
}

const Dashboard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleExpandClick = () => {
    setExpanded(! expanded);
  };
  const handleChange = (event) => {
    // eslint-disable-next-line prefer-destructuring
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className='pro-badges-wrap'>
      <Card className={ classes.profileCard } raised>
        <div className={ classes.imgWrapper }>
          <img
            className={ classes.profilePic }
            src={ MyProfilePic }
            alt=''
          />
        </div>
        <CardContent>
          <Typography variant='h5'>
            Miles
            <br />
            Mickelson
          </Typography>
          <ButtonGroup
            orientation='vertical'
            variant='text'
            color='primary'
            className={ classes.verticalWrap }
            aria-label='vertical contained primary button group'
          >
            <Button>
              <Typography variant='subtitle2'>
                My&nbsp;Account
              </Typography>
            </Button>
            <Button>
              <Typography variant='subtitle2'>
                My&nbsp;Shop
              </Typography>
            </Button>
            <Button>
              <Typography variant='subtitle2'>
                FeedBack
              </Typography>
            </Button>
            <Button>
              <Typography variant='subtitle2'>
                Awaiting&nbsp;Shipment
              </Typography>
            </Button>
            <Button>
              <Typography variant='subtitle2'>
                My&nbsp;Feed
              </Typography>
            </Button>
            <Button>
              <Typography variant='subtitle2'>
                Watch&nbsp;List
              </Typography>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            orientation='vertical'
            variant='contained'
            color='primary'
            aria-label='vertical contained primary button group'
          >
            <Button className={ classes.button }>
              <Typography variant='button'>Drafts</Typography>
              <div className='flex-grow-100' />
              <Typography variant='button'>1</Typography>
            </Button>
            <Button className={ classes.button }>
              <span>Live</span>
              <span>17</span>
            </Button>
            <Button className={ classes.button }>
              <span>Ended</span>
              <span>3</span>
            </Button>
            <Button className={ classes.button }>
              <span>Sold Out</span>
              <span>0</span>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            orientation='vertical'
            variant='contained'
            color='primary'
            aria-label='vertical contained primary button group'
          >
            <Button className={ classes.button }>Customize My Shop</Button>
            <Button className={ classes.button }>Promote My Shop</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
      <Card className={ classes.badgeCard }>
        <CardActionArea>
          <CardContent gutterBottom>
            <Typography variant='h5'>Badge Status</Typography>
            <hr />
            <div className='badges-wrap'>
              <Card className={ classes.badge }>
                <CardActionArea>
                  <CardContent>
                    <div className='badge-wrap'>
                      <DoubleArrowRoundedIcon color='primary' fontSize='large' />
                    </div>
                    <Typography variant='subtitle1'>Fast Responder</Typography>
                    <LinearDeterminate className={ classes.progressBar } />
                    <IconButton
                      className={ clsx(classes.expand, { [classes.expandOpen]: expanded }) }
                      onClick={ handleExpandClick }
                      aria-expanded={ expanded }
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
                <Collapse in={ expanded } timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph align='left'>
                      Method:
                      <br />
                      Reply to 10 people within ten minutes!
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={ classes.badge }>
                <CardActionArea>
                  <CardContent>
                    <div className='badge-wrap'>
                      <DoneOutlineRoundedIcon color='primary' fontSize='large' />
                    </div>
                    <Typography variant='subtitle1'>Quick Shipper</Typography>
                    <LinearDeterminate className={ classes.progressBar } />
                    <IconButton
                      className={ clsx(classes.expand, { [classes.expandOpen]: expanded }) }
                      onClick={ handleExpandClick }
                      aria-expanded={ expanded }
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
                <Collapse in={ expanded } timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph align='left'>
                      Method:
                      <br />
                      Reply to 10 people within ten minutes!
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={ classes.badge }>
                <CardActionArea>
                  <CardContent>
                    <div className='badge-wrap'>
                      <WhatshotIcon color='primary' fontSize='large' />
                    </div>
                    <Typography variant='subtitle1'>Preferred Seller</Typography>
                    <LinearDeterminate className={ classes.progressBar } />
                    <IconButton
                      className={ clsx(classes.expand, { [classes.expandOpen]: expanded }) }
                      onClick={ handleExpandClick }
                      aria-expanded={ expanded }
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
                <Collapse in={ expanded } timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph align='left'>
                      Method:
                      <br />
                      Reply to 10 people within ten minutes!
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={ classes.badge }>
                <CardActionArea>
                  <CardContent>
                    <div className='badge-wrap'>
                      <BusinessCenterIcon color='primary' fontSize='large' />
                    </div>
                    <Typography variant='subtitle1'>Pro Packer</Typography>
                    <LinearDeterminate className={ classes.progressBar } />
                    <IconButton
                      className={ clsx(classes.expand, { [classes.expandOpen]: expanded }) }
                      onClick={ handleExpandClick }
                      aria-expanded={ expanded }
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
                <Collapse in={ expanded } timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph align='left'>
                      Method:
                      <br />
                      Reply to 10 people within ten minutes!
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={ classes.badge }>
                <CardActionArea>
                  <CardContent>
                    <div className='badge-wrap'>
                      <PeopleAltIcon color='primary' fontSize='large' />
                    </div>
                    <Typography variant='subtitle1'>Good Neighbor</Typography>
                    <LinearDeterminate className={ classes.progressBar } />
                    <IconButton
                      className={ clsx(classes.expand, { [classes.expandOpen]: expanded }) }
                      onClick={ handleExpandClick }
                      aria-expanded={ expanded }
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
                <Collapse in={ expanded } timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph align='left'>
                      Method:
                      <br />
                      Reply to 10 people within ten minutes!
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={ classes.badge }>
                <CardActionArea>
                  <CardContent>
                    <div className='badge-wrap'>
                      <DescriptionOutlinedIcon color='primary' fontSize='large' />
                    </div>
                    <Typography variant='subtitle1'>Ace Descriptor</Typography>
                    <LinearDeterminate className={ classes.progressBar } />
                    <IconButton
                      className={ clsx(classes.expand, { [classes.expandOpen]: expanded }) }
                      onClick={ handleExpandClick }
                      aria-expanded={ expanded }
                      aria-label='show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
                <Collapse in={ expanded } timeout='auto' unmountOnExit>
                  <CardContent>
                    <Typography paragraph align='left'>
                      Method:
                      <br />
                      Reply to 10 people within ten minutes!
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={ classes.fullCard } raised>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>Recent Sales & Purchases</Typography>
            <hr />
            <div className='flex-row-center-between'>
              <Typography variant='subtitle1'>Sales - Last 7 Days</Typography>
              <FormControl variant='outlined' className={ classes.formControl }>
                <InputLabel htmlFor='outlined-age-native-simple'>Last 7 Days</InputLabel>
                <Select
                  native
                  value={ state.age }
                  onChange={ handleChange }
                  label='Age'
                  inputProps={ {
                    name: 'age',
                    id: 'outlined-age-native-simple',
                  } }
                >
                  <option aria-label='None' value='' />
                  <option value={ 10 }>Ten</option>
                  <option value={ 20 }>Twenty</option>
                  <option value={ 30 }>Thirty</option>
                </Select>
              </FormControl>
            </div>
            <DashboardChart />
            <hr />
            <br />
            <ButtonGroup
              variant='text'
              aria-label='info display group'
              className={ classes.graphWrap }
            >
              <div className='flex-col-center-evenly flex-grow'>
                <Typography variant='button' color='primary'>Sales</Typography>
                <Typography variant='subtitle1'>$721.00</Typography>
                <br />
                <Typography variant='button' color='primary'>Previous</Typography>
                <Typography variant='subtitle1'>$1096.00</Typography>
              </div>
              <div className='flex-col-center-evenly flex-grow'>
                <Typography variant='button' color='primary'>Orders</Typography>
                <Typography variant='subtitle1'>9</Typography>
                <br />
                <Typography variant='button' color='primary'>Previous</Typography>
                <Typography variant='subtitle1'>7</Typography>
              </div>
              <div className='flex-col-center-evenly flex-grow'>
                <Typography variant='button' color='primary'>Offers</Typography>
                <Typography variant='subtitle1'>4</Typography>
                <br />
                <Typography variant='button' color='primary'>Previous</Typography>
                <Typography variant='subtitle1'>3</Typography>
              </div>
              <div className='flex-col-center-evenly flex-grow'>
                <Typography variant='button' color='primary'>Watchers</Typography>
                <Typography variant='subtitle1'>17</Typography>
                <br />
                <Typography variant='button' color='primary'>Previous</Typography>
                <Typography variant='subtitle1'>11</Typography>
              </div>
            </ButtonGroup>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={ classes.fullCard } raised>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>Promotions</Typography>
            <hr />
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={ classes.fullCard } raised>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>Optimizing</Typography>
            <hr />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Dashboard;

