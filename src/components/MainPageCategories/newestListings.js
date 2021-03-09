/* eslint-disable arrow-body-style */
import React from 'react';

import Typography from '@material-ui/core/Typography';
import RightArrow from '../../hooks/right-arrow';
import ItemListing from '../../hooks/item-listing';

const NewestListings = () => {
  return (
    <section className='twelve-sixty-max flex-row-center-between'>
      <div className='twelve-sixty-max flex-row-center-between'>
        <Typography variant='h4' align='left'>Newest Listings</Typography>
        <Typography variant='body2' align='right'>
          <a href='https://google.com'>
            View all
            <RightArrow />
          </a>
        </Typography>
      </div>
      <ItemListing />
      <ItemListing />
      <ItemListing />
      <ItemListing />
      <ItemListing />
    </section>
  );
};

export default NewestListings;
