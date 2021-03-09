import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RightArrow from '../../hooks/right-arrow';

import itempic1 from '../../assets/poolpic1.jpg';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 305,
    boxShadow: '1px 1px 5px #404040',
  },
}));

const Collections = () => {
  const classes = useStyles();

  return (
    <section className='twelve-sixty-max flex-row-center-between'>
      <div className='twelve-sixty-max flex-row-center-between'>
        <Typography variant='h4' align='left'>Handpicked Collections</Typography>
        <Typography variant='body2' align='right'>
          <a href='https://google.com'>
            View all
            <RightArrow />
          </a>
        </Typography>
      </div>
      <Card className={ classes.card }>
        <CardActionArea>
          <img
            className='article-image'
            src={ itempic1 }
            alt='Home'
          />
          <CardContent>
            <Typography variant='subtitle1'>Newest Listings</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' color='primary'>Share</Button>
          <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
      </Card>
      <Card className={ classes.card }>
        <CardActionArea>
          <img
            className='article-image'
            src={ itempic1 }
            alt='Home'
          />
          <CardContent>
            <Typography variant='subtitle1'>Handmade Cues</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' color='primary'>Share</Button>
          <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
      </Card>
      <Card className={ classes.card }>
        <CardActionArea>
          <img
            className='article-image'
            src={ itempic1 }
            alt='Home'
          />
          <CardContent>
            <Typography variant='subtitle1'>Hot Deals</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' color='primary'>Share</Button>
          <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
      </Card>
      <Card className={ classes.card }>
        <CardActionArea>
          <img
            className='article-image'
            src={ itempic1 }
            alt='Home'
          />
          <CardContent>
            <Typography variant='subtitle1'>Pool Masterclasses</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' color='primary'>Share</Button>
          <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
      </Card>
    </section>
  );
};

export default Collections;
