import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { REVIEW_TYPE_OF_PROVIDER, REVIEW_TYPE_OF_CUSTOMER, propTypes } from '../../util/types';
import { ensureCurrentUser, ensureUser } from '../../util/data';
import { withViewport } from '../../util/contextHelpers';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import {
  Page,
  Topbar,
  Footer,
  AvatarLarge,
  NamedLink,
  Reviews,
  ButtonTabNavHorizontal,
} from '../../components';
import { NotFoundPage } from '../../containers';
import config from '../../config';

import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // thing: {
  // },
}));
const ProfilePageComponent = (props) => {
  const {
    scrollingDisabled,
    currentUser,
    user,
    userShowError,
    reviews,
    queryReviewsError,
    viewport,
    intl,
  } = props;
  const classes = useStyles();
  const [showReviewsType, setShowReviewsType] = useState(REVIEW_TYPE_OF_PROVIDER);
  const showOfProviderReviews = () => {
    setShowReviewsType(REVIEW_TYPE_OF_PROVIDER);
  };
  const showOfCustomerReviews = () => {
    setShowReviewsType(REVIEW_TYPE_OF_CUSTOMER);
  };
  const ensuredCurrentUser = ensureCurrentUser(currentUser);
  const profileUser = ensureUser(user);
  const isCurrentUser =
    ensuredCurrentUser.id && profileUser.id && ensuredCurrentUser.id.uuid === profileUser.id.uuid;
  const displayName = profileUser.attributes.profile.displayName;
  const bio = profileUser.attributes.profile.bio;
  const hasBio = !!bio;
  // const isMobileLayout = viewport.width < MAX_MOBILE_SCREEN_WIDTH;

  // const editLinkMobile = isCurrentUser ? (
  //   <NamedLink name="ProfileSettingsPage">
  //     Edit Profile
  //   </NamedLink>
  // ) : null;
  // const editLinkDesktop = isCurrentUser ? (
  //   <NamedLink name="ProfileSettingsPage">
  //     Edit Profile
  //   </NamedLink>
  // ) : null;

  // const asideContent = (
  //   <div className={css.asideContent}>
  //     <AvatarLarge className={css.avatar} user={user} disableProfileLink />
  //     <h1 className={css.mobileHeading}>
  //       {displayName ? (
  //         <FormattedMessage id="ProfilePage.mobileHeading" values={{ name: displayName }} />
  //       ) : null}
  //     </h1>
  //     {editLinkMobile}
  //     {editLinkDesktop}
  //   </div>
  // );

  // const reviewsError = (
  //   <p className={css.error}>
  //     <FormattedMessage id="ProfilePage.loadingReviewsFailed" />
  //   </p>
  // );

  const reviewsOfProvider = reviews.filter(r => r.attributes.type === REVIEW_TYPE_OF_PROVIDER);

  const reviewsOfCustomer = reviews.filter(r => r.attributes.type === REVIEW_TYPE_OF_CUSTOMER);

  // const mobileReviews = (
  //   <div>
  //     <h2>
  //       <FormattedMessage
  //         id="ProfilePage.reviewsOfProviderTitle"
  //         values={{ count: reviewsOfProvider.length }}
  //       />
  //     </h2>
  //     {queryReviewsError ? reviewsError : null}
  //     <Reviews reviews={reviewsOfProvider} />
  //     <h2>
  //       <FormattedMessage
  //         id="ProfilePage.reviewsOfCustomerTitle"
  //         values={{ count: reviewsOfCustomer.length }}
  //       />
  //     </h2>
  //     {queryReviewsError ? reviewsError : null}
  //     <Reviews reviews={reviewsOfCustomer} />
  //   </div>
  // );

  const desktopReviewTabs = [
    {
      text: (
        <h3>
          <FormattedMessage
            id="ProfilePage.reviewsOfProviderTitle"
            values={{ count: reviewsOfProvider.length }}
          />
        </h3>
      ),
      selected: showReviewsType === REVIEW_TYPE_OF_PROVIDER,
      onClick: showOfProviderReviews,
    },
    {
      text: (
        <h3>
          <FormattedMessage
            id="ProfilePage.reviewsOfCustomerTitle"
            values={{ count: reviewsOfCustomer.length }}
          />
        </h3>
      ),
      selected: showReviewsType === REVIEW_TYPE_OF_CUSTOMER,
      onClick: showOfCustomerReviews,
    },
  ];

  const desktopReviews = (
    <div>
      <ButtonTabNavHorizontal tabs={desktopReviewTabs} />
      {queryReviewsError ? reviewsError : null}
      {showReviewsType === REVIEW_TYPE_OF_PROVIDER ? (
        <Reviews reviews={reviewsOfProvider} />
      ) : (
        <Reviews reviews={reviewsOfCustomer} />
      )}
    </div>
  );

  const mainContent = (
    <div>
      <h1>
        { displayName }
      </h1>
      {hasBio ? <p>{bio}</p> : null}
      {/* {isMobileLayout ? mobileReviews : desktopReviews} */}
    </div>
  );

  let content;

  if (userShowError && userShowError.status === 404) {
    return <NotFoundPage />;
  } else if (userShowError) {
    content = (
      <p>
        <FormattedMessage id="ProfilePage.loadingDataFailed" />
      </p>
    );
  } else {
    content = mainContent;
  }

  const schemaTitle = intl.formatMessage(
    {
      id: 'ProfilePage.schemaTitle',
    },
    {
      name: displayName,
      siteTitle: config.siteTitle,
    }
  );

  return (
    <Page
      scrollingDisabled={scrollingDisabled}
      title={schemaTitle}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ProfilePage',
        name: schemaTitle,
      }}
    >
      <Topbar currentPage="ProfilePage" />
        {content}
      <Footer />
    </Page>
  );
};

ProfilePageComponent.defaultProps = {
  currentUser: null,
  user: null,
  userShowError: null,
  reviews: [],
  queryReviewsError: null,
};

const { bool, arrayOf, number, shape } = PropTypes;

ProfilePageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,
  currentUser: propTypes.currentUser,
  user: propTypes.user,
  userShowError: propTypes.error,
  reviews: arrayOf(propTypes.review),
  queryReviewsError: propTypes.error,

  // form withViewport
  viewport: shape({
    width: number.isRequired,
    height: number.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  const { userId, userShowError, reviews, queryReviewsError } = state.ProfilePage;
  const userMatches = getMarketplaceEntities(state, [{ type: 'user', id: userId }]);
  const user = userMatches.length === 1 ? userMatches[0] : null;
  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUser,
    user,
    userShowError,
    reviews,
    queryReviewsError,
  };
};

const ProfilePage = compose(
  connect(mapStateToProps),
  withViewport,
  injectIntl
)(ProfilePageComponent);

export default ProfilePage;
