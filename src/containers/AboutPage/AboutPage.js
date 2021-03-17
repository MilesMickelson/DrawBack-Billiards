import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage } from '../../containers';
import {
  Topbar,
  Footer,
  ExternalLink,
} from '../../components';

import image from '../../assets/poolpic1.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Yogatime',
        name: 'About page',
      }}
    >
      <Topbar />
        <div className='nine-sixty-max flex-col-center'>
          <Typography variant='h2'>About DrawBack Billiards</Typography>
          <img src={ image } alt='' className={ classes.image } />
            <Typography variant='body1'>
              Helped brought to you by&nbsp;
              <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Sharetribe
              offers anyone a possibility to create a marketplace without restricting your own
              creativity. Do not hesitate to reach out and learn how to best turn your
              marketplace idea to reality.
            </Typography>
            <Typography variant='body1'>
              You can also checkout our{' '}
              <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
              <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
            </Typography>
          </div>
        <Footer />
    </StaticPage>
  );
};

export default AboutPage;
