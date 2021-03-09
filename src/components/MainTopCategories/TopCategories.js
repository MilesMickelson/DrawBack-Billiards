import React from 'react';
import ClassNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import itempic9 from '../../assets/itempic9.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 305,
    boxShadow: '1px 1px 5px #404040',
  },
  primaryDark: {
    color: theme.palette.primary.dark,
  },
}));

const MainTopCategorys = () => {
  const classes = useStyles();

  return (
    <section className={ ClassNames('twelve-sixty-max', 'flex-row-center-between') }>
      <Card className={ classes.card }>
        <CardActionArea>
          <CardContent>
            <Typography variant='h5'>Newest Added</Typography>
          </CardContent>
          <img className='article-image' src={ itempic9 } alt='Home' />
          <CardContent>
            <Typography>
              Take a pool masterclass with a select few individuals like yourself; or get one on one lessons with a certified instructor or professional pool player.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' className={ classes.primaryDark }>Share</Button>
          <Button size='small' className={ classes.primaryDark }>Categories</Button>
        </CardActions>
      </Card>
      <Card className={ classes.card }>
        <CardContent>
          <Typography variant='h5'>Handmade Cues</Typography>
        </CardContent>
        <CardActionArea>
          <img className='article-image' src={ itempic9 } alt='Home' />
          <CardContent>
            <Typography>
              Take a pool masterclass with a select few individuals like yourself; or get one on one lessons with a certified instructor or professional pool player.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' className={ classes.primaryDark }>Share</Button>
          <Button size='small' className={ classes.primaryDark }>Categories</Button>
        </CardActions>
      </Card>
      <Card className={ classes.card }>
        <CardContent>
          <Typography variant='h5'>DrawBack Steals</Typography>
        </CardContent>
        <CardActionArea>
          <img className='article-image' src={ itempic9 } alt='Home' />
          <CardContent>
            <Typography>
              Take a pool masterclass with a select few individuals like yourself; or get one on one lessons with a certified instructor or professional pool player.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' className={ classes.primaryDark }>Share</Button>
          <Button size='small' className={ classes.primaryDark }>Categories</Button>
        </CardActions>
      </Card>
      <Card className={ classes.card }>
        <CardContent>
          <Typography variant='h5'>Pool Masterclasses</Typography>
        </CardContent>
        <CardActionArea>
          <img className='article-image' src={ itempic9 } alt='Home' />
          <CardContent>
            <Typography>
              Take a pool masterclass with a select few individuals like yourself; or get one on one lessons with a certified instructor or professional pool player.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' className={ classes.primaryDark }>Share</Button>
          <Button size='small' className={ classes.primaryDark }>Instructors</Button>
        </CardActions>
      </Card>
      {/* <Card className={ classes.card }>
        <CardContent>
          <Typography variant='h5'>Store SpotLight</Typography>
        </CardContent>
        <CardActionArea>
          <img className='article-image' src={ itempic9 } alt='Home' />
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex-row-center-around'>
          <Button size='small' className={ classes.primaryDark }>Share</Button>
          <Button size='small' className={ classes.primaryDark }>Instructors</Button>
        </CardActions>
      </Card> */}
    </section>
  );
};

export default MainTopCategorys;
