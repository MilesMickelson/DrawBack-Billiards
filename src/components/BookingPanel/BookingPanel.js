import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import config from '../../config';
import omit from 'lodash/omit';
import { array, bool, func, node, object, oneOfType, shape, string } from 'prop-types';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { formatMoney } from '../../util/currency';
import { parse, stringify } from '../../util/urlHelpers';
import {
  propTypes,
  LISTING_STATE_CLOSED,
  LINE_ITEM_NIGHT,
  LINE_ITEM_DAY
} from '../../util/types';

import { ModalInMobile, Button } from '../../components';
import { BookingTimeForm } from '../../forms';

import { Typography } from '@material-ui/core';

// This defines when ModalInMobile shows content as Modal
// const MODAL_BREAKPOINT = 1023;
const TODAY = new Date();

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: `(${price.currency})`,
      priceTitle: `Unsupported currency (${price.currency})`,
    };
  }
  return {};
};
const openBookModal = (isOwnListing, isClosed, history, location) => {
  if (isOwnListing || isClosed) {
    window.scrollTo(0, 0);
  } else {
    const { pathname, search, state } = location;
    const searchString = `?${stringify({ ...parse(search), book: true })}`;
    history.push(`${pathname}${searchString}`, state);
  }
};
const closeBookModal = (history, location) => {
  const { pathname, search, state } = location;
  const searchParams = omit(parse(search), 'book');
  const searchString = `?${stringify(searchParams)}`;
  history.push(`${pathname}${searchString}`, state);
};
const dateFormattingOptions = { month: 'short', day: 'numeric', weekday: 'short' };
const BookingPanel = (props) => {
  const {
    rootClassName,
    className,
    titleClassName,
    listing,
    isOwnListing,
    unitType,
    onSubmit,
    title,
    subTitle,
    onManageDisableScrolling,
    onFetchTimeSlots,
    monthlyTimeSlots,
    history,
    location,
    intl,
    onFetchTransactionLineItems,
    lineItems,
    fetchLineItemsInProgress,
    fetchLineItemsError,
  } = props;

  const price = listing.attributes.price;
  const timeZone =
    listing.attributes.availabilityPlan && listing.attributes.availabilityPlan.timezone;
  const hasListingState = !!listing.attributes.state;
  const isClosed = hasListingState && listing.attributes.state === LISTING_STATE_CLOSED;
  const showBookingTimeForm = hasListingState && !isClosed;
  const showClosedListingHelpText = listing.id && isClosed;
  const { formattedPrice, priceTitle } = priceData(price, intl);
  const isBook = !!parse(location.search).book;

  const subTitleText = !!subTitle
    ? subTitle
    : showClosedListingHelpText
    ? intl.formatMessage({ id: 'BookingPanel.subTitleClosedListing' })
    : null;

  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'BookingPanel.perNight'
    : isDaily
    ? 'BookingPanel.perDay'
    : 'BookingPanel.perUnit';

  // const classes = classNames(rootClassName || css.root, className);
  // const titleClasses = classNames(titleClassName || css.bookingTitle);

  return (
    <div className='nine-sixty-max'>
      <ModalInMobile
        id="BookingTimeFormInModal"
        isModalOpenOnMobile={isBook}
        onClose={() => closeBookModal(history, location)}
        // showAsModalMaxWidth={MODAL_BREAKPOINT}
        onManageDisableScrolling={onManageDisableScrolling}
      >
          <Typography variant='h4'>{title}</Typography>
          {subTitleText ? <div>{subTitleText}</div> : null}
          <Typography variant='body1'>{formattedPrice}</Typography>
          <Typography variant='body1'>{unitTranslationKey}</Typography>
        {showBookingTimeForm ? (
          <BookingTimeForm
            formId="BookingPanel"
            unitType={unitType}
            onSubmit={onSubmit}
            price={price}
            listingId={listing.id}
            isOwnListing={isOwnListing}
            monthlyTimeSlots={monthlyTimeSlots}
            onFetchTimeSlots={onFetchTimeSlots}
            startDatePlaceholder={intl.formatDate(TODAY, dateFormattingOptions)}
            endDatePlaceholder={intl.formatDate(TODAY, dateFormattingOptions)}
            timeZone={timeZone}
            onFetchTransactionLineItems={onFetchTransactionLineItems}
            lineItems={lineItems}
            fetchLineItemsInProgress={fetchLineItemsInProgress}
            fetchLineItemsError={fetchLineItemsError}
          />
        ) : null}
      </ModalInMobile>
      <Typography variant='body1' id={unitTranslationKey}>
        {formattedPrice}
        {priceTitle}
        {unitTranslationKey}
      </Typography>
      {showBookingTimeForm ? (
        <Button onClick={() => openBookModal(isOwnListing, isClosed, history, location)}>
          BookingPanel.ctaButtonMessage
        </Button>
      ) : isClosed ? (
        <Typography variant='body1'>BookingPanel.closedListingButtonText</Typography>
      ) : null
      }
    </div>
  );
};

BookingPanel.defaultProps = {
  rootClassName: null,
  className: null,
  titleClassName: null,
  isOwnListing: false,
  subTitle: null,
  unitType: config.bookingUnitType,
  monthlyTimeSlots: null,
  lineItems: null,
  fetchLineItemsError: null,
};

BookingPanel.propTypes = {
  rootClassName: string,
  className: string,
  titleClassName: string,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]),
  isOwnListing: bool,
  unitType: propTypes.bookingUnitType,
  onSubmit: func.isRequired,
  title: oneOfType([node, string]).isRequired,
  subTitle: oneOfType([node, string]),
  authorDisplayName: oneOfType([node, string]).isRequired,
  onManageDisableScrolling: func.isRequired,
  onFetchTimeSlots: func.isRequired,
  monthlyTimeSlots: object,
  onFetchTransactionLineItems: func.isRequired,
  lineItems: array,
  fetchLineItemsInProgress: bool.isRequired,
  fetchLineItemsError: propTypes.error,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
  location: shape({
    search: string,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default compose(
  withRouter,
  injectIntl
)(BookingPanel);
