import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const ScoreRating = () => {
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(- 1);
  return (
    <div>
      <Rating
        name='hover-feedback'
        size='small'
        readOnly='true'
        value={ value }
        precision={ 0.5 }
        onChange={ (event, newValue) => {
          setValue(newValue);
        } }
        onChangeActive={ (event, newHover) => {
          setHover(newHover);
        } }
      />
      {value !== null && <Box ml={ 2 }>{labels[hover !== - 1 ? hover : value]}</Box>}
    </div>
  );
};

export default ScoreRating;
