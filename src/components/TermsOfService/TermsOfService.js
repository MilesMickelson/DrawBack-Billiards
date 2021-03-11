import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const TermsOfService = () => {
  return (
    <div className={ 'nine-sixty-max' }>
      <Typography variant='h5' align='center'>
        Last updated: Thursday March 11th, 2021
      </Typography>
      <Typography variant='body1'>
        Thank you for using Yogatime! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      </Typography>
      <Typography variant='h5' align='left'>
        Title 2
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
      <Typography variant='h5' align='left'>
        Title 3
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
      <Typography variant='h5' align='left'>
        Title 4
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
      <Typography variant='h5' align='left'>
        Title 5
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
      <Typography variant='h5' align='left'>
        Title 6
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
      <Typography variant='h5' align='left'>
        Title 7
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Typography>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
