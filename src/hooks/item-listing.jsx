import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ScoreRating from '../hooks/rating';

import samsara1 from '../assets/samsara1.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 240,
    boxShadow: '1px 1px 5px #000000',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  cardTitle: {
    color: theme.palette.darkMystery,
    fontSize: 'calc(.6rem + .6vmin)',
    maxWidth: 167,
  },
}));
const ItemListing = () => {
  const classes = useStyles();

  return (
    <Card className={ classes.card }>
      <CardContent className='flex-row-center-between'>
        <div>
          <Typography variant='subtitle2' className={ classes.cardTitle }>Samsara</Typography>
          <Typography variant='subtitle2' className={ classes.cardTitle }>7 point Custom Cue</Typography>
        </div>
        <Avatar aria-label='avatar' className={ classes.avatar }>MM</Avatar>
      </CardContent>
      <CardActionArea>
        <img className='item-pic' src={ samsara1 } alt='Home' />
        <CardContent>
          <Typography paragraph variant='body1'>
            Full core cue made with ebony and kingwood. Low deflection laminated shaft with ivorine 4 ferrule and a white phenolic joint and buttcap.
          </Typography>
          <div className='flex-row-center-between'>
            <Typography variant='subtitle1' align='right'>$340</Typography>
            <ScoreRating />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex-row-center-around'>
        <IconButton aria-label='add to favorites'><FavoriteBorderIcon /></IconButton>
        <IconButton aria-label='share'><ShareIcon /></IconButton>
        <IconButton aria-label='settings'><MoreVertIcon /></IconButton>
      </CardActions>
    </Card>
  );
};

export default ItemListing;
