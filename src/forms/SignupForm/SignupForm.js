import React, {
  useState,
  useEffect
} from 'react';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { Form as FinalForm } from 'react-final-form';

import {
  Form,
  FieldTextInput
} from '../../components';
import * as validators from '../../util/validators';
import { injectIntl, intlShape } from '../../util/reactIntl';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const KEY_CODE_ENTER = 13;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const SignupFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        rootClassName,
        className,
        formId,
        handleSubmit,
        inProgress,
        invalid,
        intl,
        onOpenTermsOfService,
      } = fieldRenderProps;

      const firstNameRequiredMessage = intl.formatMessage({id: 'SignupForm.firstNameRequired'});
      const lastNameRequiredMessage = intl.formatMessage({id: 'SignupForm.lastNameRequired'});
      const emailRequiredMessage = intl.formatMessage({ id: 'SignupForm.emailRequired'});
      const emailInvalidMessage = intl.formatMessage({id: 'SignupForm.emailInvalid'});
      const firstNameRequired = validators.required(firstNameRequiredMessage);
      const lastNameRequired = validators.required(lastNameRequiredMessage);
      const emailRequired = validators.required(emailRequiredMessage);
      const emailValid = validators.emailFormatValid(emailInvalidMessage);

      const passwordRequiredMessage = intl.formatMessage({id: 'SignupForm.passwordRequired'});
      const passwordMinLengthMessage = intl.formatMessage(
        { id: 'SignupForm.passwordTooShort' },
        { minLength: validators.PASSWORD_MIN_LENGTH }
      );
      const passwordMaxLengthMessage = intl.formatMessage(
        { id: 'SignupForm.passwordTooLong' },
        { maxLength: validators.PASSWORD_MAX_LENGTH }
      );
      const passwordMinLength = validators.minLength(
        passwordMinLengthMessage,
        validators.PASSWORD_MIN_LENGTH
      );
      const passwordMaxLength = validators.maxLength(
        passwordMaxLengthMessage,
        validators.PASSWORD_MAX_LENGTH
      );
      const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
      const passwordValidators = validators.composeValidators(
        passwordRequired,
        passwordMinLength,
        passwordMaxLength
      );

      const submitInProgress = inProgress;
      // Todo MaterialUI button disable prop needs to be changed in order to use this!
      const submitDisabled = invalid || submitInProgress;

      const handleTermsKeyUp = e => {
        if (e.keyCode === KEY_CODE_ENTER) {
          onOpenTermsOfService();
        }
      };
      
      const classes = useStyles();
      return (
        <Form onSubmit={ handleSubmit }>
          <div className='nine-sixty-max flex-row-center-evenly'>
          <FieldTextInput
            name='fname'
            id={formId ? `${formId}.fname` : 'fname'}
            validate={ firstNameRequired }
            label='First Name'
            autoComplete='given-name'
            variant='outlined'
          />
          <FieldTextInput
            name='lname'
            id={formId ? `${formId}.lname` : 'lname'}
            validate={ lastNameRequired }
            label='Last Name'
            autoComplete='family-name'
            variant='outlined'
          />
          <FieldTextInput
            name='email'
            type='email'
            id={ formId ? `${formId}.email` : 'email' }
            validate={ validators.composeValidators(emailRequired, emailValid) }
            label='Email'
            autoComplete='email'
            variant='outlined'
          />
          <FieldTextInput
            name='password'
            type='password'
            id={ formId ? `${formId}.password` : 'password' }
            validate={ passwordValidators }
            label='Password'
            autoComplete='new-password'
            variant='outlined'
          />
          <Typography variant='body1'>
            By signing up you agree to the&nbsp;
            <Link
              onClick={ onOpenTermsOfService }
              role='button'
              tabIndex='0'
              onKeyUp={ handleTermsKeyUp }
            >
              Terms and Conditions          
            </Link>
          </Typography>
          <Button type='submit' variant='contained' color='primary' inProgress={submitInProgress}>
            Sign Up
          </Button>
          </div>
        </Form>
      );
    }}
  />
);

SignupFormComponent.defaultProps = { inProgress: false };

const { bool, func } = PropTypes;

SignupFormComponent.propTypes = {
  inProgress: bool,
  onOpenTermsOfService: func.isRequired,
  // from injectIntl
  intl: intlShape.isRequired,
};

const SignupForm = compose(injectIntl)(SignupFormComponent);
SignupForm.displayName = 'SignupForm';

export default SignupForm;
