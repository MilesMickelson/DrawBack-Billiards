/* eslint-disable arrow-body-style */
import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const TopCategoryBar = () => {
  return (
    <div className='twelve-sixty-max-top flex-row-center'>
      <ButtonGroup variant='text' color='primary' aria-label='primary categories'>
        <Button>Pool Cues</Button>
        <Button>Shafts</Button>
        <Button>Cases</Button>
        <Button>Cue Supplies</Button>
        <Button>Training</Button>
        <Button>Pool Tables</Button>
        <Button>Table Movers</Button>
        <Button>Table Supplies</Button>
        <Button>DrawBack Steals</Button>
      </ButtonGroup>
    </div>
  );
};

export default TopCategoryBar;
