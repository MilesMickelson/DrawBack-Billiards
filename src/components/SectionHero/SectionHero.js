import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import bannerImage from '../../assets/poolpic1.jpg';

const useStyles = makeStyles((theme) => ({
  subtitle2: {
    marginTop: '2.4em',
    marginLeft: 'calc(13px + 3vmin)',
    marginBottom: '0.25em',
  },
  inputRoot: {
    color: theme.palette.black,
    backgroundColor: theme.palette.white,
    position: 'relative',
    marginTop: 5,
    marginLeft: 'calc(15px + 3vmin)',
    width: 275,
    fontSize: '1.25em',
  },
  inputInput: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: theme.fullWidth,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  prevSearches: {
    marginTop: '0.5em',
    marginLeft: 'calc(17px + 3vmin)',
  },
}));

const SectionHero = () => {
  const classes = useStyles();
  return (
    <section className='nine-sixty-max'>
      <img
        id='banner'
        src={ bannerImage }
        alt='Home'
      />
      <Typography variant='h2'>
        Billiards equipment and supply from trusted brands, businesses, and fellow pool enthusiasts posted daily.
      </Typography>
      <Typography variant='h3' align='left' className={ classes.subtitle2 }>
        Find the right cue, that represents,&nbsp;
        <i>
          your&nbsp;
        </i>
        game.
      </Typography>
      <InputBase
        placeholder='Search now…'
        multiline
        classes={ {
          root: classes.inputRoot,
          input: classes.inputInput,
        } }
        inputProps={ { 'aria-label': 'search' } }
      />
      {/* <Typography variant='h6' align='left' className={ classes.prevSearches }>Previous Searches...</Typography> */}
      <div id='searches-wrap' />
    </section>
  );
};

export default SectionHero;


// import React from 'react';
// import { string } from 'prop-types';
// import { FormattedMessage } from '../../util/reactIntl';
// import classNames from 'classnames';
// import { NamedLink } from '../../components';

// import css from './SectionHero.module.css';

// const SectionHero = props => {
//   const { rootClassName, className } = props;

//   const classes = classNames(rootClassName || css.root, className);

//   return (
//     <div className={classes}>
//       <div className={css.heroContent}>
//         <h1 className={css.heroMainTitle}>
//           <FormattedMessage id="SectionHero.title" />
//         </h1>
//         <h2 className={css.heroSubTitle}>
//           <FormattedMessage id="SectionHero.subTitle" />
//         </h2>
//         <NamedLink
//           name="SearchPage"
//           to={{
//             search:
//               'address=United%20States%20of%20America&bounds=71.540724%2C-66.885444%2C18.765563%2C-179.9',
//           }}
//           className={css.heroButton}
//         >
//           <FormattedMessage id="SectionHero.browseButton" />
//         </NamedLink>
//       </div>
//     </div>
//   );
// };

// SectionHero.defaultProps = { rootClassName: null, className: null };

// SectionHero.propTypes = {
//   rootClassName: string,
//   className: string,
// };

// export default SectionHero;
