import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  rightArrow: {
    verticalAlign: 'middle',
    color: theme.palette.primary.dark,
  },
}));

const RightArrow = () => {
  const classes = useStyles();
  return <ArrowRightAltIcon fontSize='large' className={ classes.rightArrow } />;
};

export default RightArrow;
