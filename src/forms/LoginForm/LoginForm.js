

import React, {
  useState,
  useEffect
} from 'react';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { Form as FinalForm } from 'react-final-form';

import { Form, FieldTextInput, NamedLink } from '../../components';
import * as validators from '../../util/validators';
import { injectIntl, intlShape } from '../../util/reactIntl';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const KEY_CODE_ENTER = 13;

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: 45,
  },
}));

const LoginFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        formId,
        handleSubmit,
        inProgress,
        intl,
        invalid,
      } = fieldRenderProps;

      const emailRequiredMessage = intl.formatMessage({
        id: 'LoginForm.emailRequired',
      });
      const emailRequired = validators.required(emailRequiredMessage);
      const emailInvalidMessage = intl.formatMessage({
        id: 'LoginForm.emailInvalid',
      });
      const emailValid = validators.emailFormatValid(emailInvalidMessage);
      const passwordRequiredMessage = intl.formatMessage({
        id: 'LoginForm.passwordRequired',
      });
      const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);

      const submitInProgress = inProgress;
      const submitDisabled = invalid || submitInProgress;

      return (
        <Form onSubmit={handleSubmit}>
          <div className='nine-sixty-max flex-col-center'>
          <Typography variant='body1'>Welcome back to</Typography>
          <Typography variant='h2'>DrawBack Billiards</Typography>
          <hr />
          <Typography variant='subtitle1'>Sign in</Typography>
          <FieldTextInput
            name='email'
            type='email'
            id={ formId ? `${formId}.email` : 'email' }
            placeholder='Email'
            label='Email'
            autoComplete='email'
            variant='outlined'
            color='primary'
          />
          <FieldTextInput
            name='password'
            type='password'
            id={ formId ? `${formId}.password` : 'password' }
            placeholder='Password'
            label='Password'
            autoComplete='new-password'
            variant='outlined'
            color='primary'
          />
          <Link name="PasswordRecoveryPage">
            Reset Password
          </Link>
          <Link
            // onClick={ onOpenLogin }
            // onKeyUp={ handleEnterKey }
            role='button'
            tabIndex='0'
          >
            <Button type='submit' color='primary' variant='contained' inProgress={submitInProgress} disabled={submitDisabled}>
              Log in
            </Button>
          </Link>
          </div>
        </Form>
      );
    }}
  />
);

LoginFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  form: null,
  inProgress: false,
};

const { string, bool } = PropTypes;

LoginFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  form: string,
  inProgress: bool,
  intl: intlShape.isRequired,
};

const LoginForm = compose(injectIntl)(LoginFormComponent);
LoginForm.displayName = 'LoginForm';

export default LoginForm;
