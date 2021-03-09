import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

import ScoreRating from '../../hooks/rating';
import RightArrow from '../../hooks/right-arrow';

import itempic1 from '../../assets/poolpic1.jpg';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 305,
    boxShadow: '1px 1px 5px #404040',
  },
}));

const Guides = () => {
  const classes = useStyles();

  return (
    <section className='twelve-sixty-max flex-row-center-between'>
      <div className='twelve-sixty-max flex-row-center-between'>
        <Typography variant='h4' align='left'>Articles</Typography>
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
            <Typography variant='subtitle1'>Inspecting a Pool Table</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <IconButton aria-label='add to favorites'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ScoreRating />
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
            <Typography variant='subtitle1'>Choosing the right cue</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <IconButton aria-label='add to favorites'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ScoreRating />
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
            <Typography variant='subtitle1'>Selecting a pool cue tip</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <IconButton aria-label='add to favorites'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ScoreRating />
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
            <Typography variant='subtitle1'>Inspecting a Pool Table</Typography>
            <Typography variant='body1'>
              How to perform a complete pool table assessment to ensure youre not buying a lemon, and ensure the smallest chance of a bad surprise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <IconButton aria-label='add to favorites'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ScoreRating />
        </CardActions>
      </Card>
    </section>
  );
};

export default Guides;
