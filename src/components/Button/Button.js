import React, {
  Component,
  useState,
  useEffect
} from 'react';

import { bool, node, string } from 'prop-types';

import routeConfiguration from '../../routeConfiguration';
import { findRouteByRouteName } from '../../util/routes';
import { IconSpinner, IconCheckmark } from '../../components';

import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

class ButtonWrap extends Component {
  constructor(props) {
      super(props);
      this.state = { mounted: false };
    }
    componentDidMount() {
        this.setState({ mounted: true }); // eslint-disable-line react/no-did-mount-set-state
      }
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(! mounted);
  // }, []);
  render () {
    const {
      children,
      className,
      rootClassName,
      spinnerClassName,
      checkmarkClassName,
      inProgress,
      ready,
      disabled,
      enforcePagePreloadFor,
      ...rest
    } = this.props;

  let content;
  if (inProgress) {
    content = <IconSpinner />;
  } else if (ready) {
    content = <IconCheckmark />;
  } else {
    content = children;
  }
  const onOverButtonFn = enforcePreloadOfPage => () => {
    // Enforce preloading of given page (loadable component)
    const { component: Page } = findRouteByRouteName(enforcePreloadOfPage, routeConfiguration());
    // Loadable Component has a "preload" function.
    if (Page.preload) {
      Page.preload();
    }
  };
  const onOverButton = enforcePagePreloadFor ? onOverButtonFn(enforcePagePreloadFor) : null;
  const onOverButtonMaybe = onOverButton
    ? {
        onMouseOver: onOverButton,
        onTouchStart: onOverButton,
      }
    : {};
  // All buttons are disabled until the component is mounted. This
  // prevents e.g. being able to submit forms to the backend before
  // the client side is handling the submit.
  const buttonDisabled = this.mounted ? disabled : true;

  return <ButtonBase disabled={ buttonDisabled } { ...onOverButtonMaybe } { ...rest } />;
  };
};

export default ButtonWrap;

ButtonWrap.defaultProps = {
  className: null,
  spinnerClassName: null,
  checkmarkClassName: null,
  inProgress: false,
  ready: false,
  disabled: false,
  enforcePagePreloadFor: null,
  children: null,
};

ButtonWrap.propTypes = {
  className: string,
  spinnerClassName: string,
  checkmarkClassName: string,
  inProgress: bool,
  ready: bool,
  disabled: bool,
  enforcePagePreloadFor: string,
  children: node,
};


export const PrimaryButton = props => {
  return (
    <ButtonWrap { ...props }>
      <Button
        fullWidth
        color='primary'
        variant='contained'
      ></Button>
    </ButtonWrap>
  )
};
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = props => {
  return <Button {...props} />
};
SecondaryButton.displayName = 'SecondaryButton';

export const InlineTextButton = props => {
  return <Button {...props} />;
};
InlineTextButton.displayName = 'InlineTextButton';

export const SocialLoginButton = props => {
  return <Button {...props} />;
};

SocialLoginButton.displayName = 'SocialLoginButton';
