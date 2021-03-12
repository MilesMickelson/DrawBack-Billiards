import React from 'react';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { Form as FinalForm } from 'react-final-form';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

import {
  Form,
  FieldTextInput,
  PrimaryButton
} from '../../components';
import * as validators from '../../util/validators';
import { injectIntl, intlShape } from '../../util/reactIntl';


const KEY_CODE_ENTER = 13;

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: 45,
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

      const handleEnterKey = e => {
        if (e.keyCode === KEY_CODE_ENTER) {
          onOpenTermsOfService();
        }
      };
      
      const classes = useStyles();
      return (
        <Form onSubmit={ handleSubmit }>
          <div className='nine-sixty-max flex-col-center'>
          <Typography variant='body1'>
            Create an account to buy, sell, trade, and custom order all the billiards equipment you'll ever need.
          </Typography>
          <Typography variant='body1'>
            Then schedule a lesson with a certified pool instructor, or even a real professional player; only on...
          </Typography>
          <Typography variant='h2'>DrawBack Billiards</Typography>
          <div className='flex-row-center'>
            <IconButton>
              <GTranslateIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </div>
          <FieldTextInput
            name='fname'
            id={formId ? `${formId}.fname` : 'fname'}
            validate={ firstNameRequired }
            placeholder='First Name'
            autoComplete='given-name'
            variant='outlined'
            color='primary'
          />
          <FieldTextInput
            name='lname'
            id={formId ? `${formId}.lname` : 'lname'}
            validate={ lastNameRequired }
            placeholder='Last Name'
            label='Last Name'
            autoComplete='family-name'
            variant='outlined'
            color='primary'
          />
          <FieldTextInput
            name='email'
            type='email'
            id={ formId ? `${formId}.email` : 'email' }
            validate={ validators.composeValidators(emailRequired, emailValid) }
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
            validate={ passwordValidators }
            placeholder='Password'
            label='Password'
            autoComplete='new-password'
            variant='outlined'
            color='primary'
          />
          <Typography variant='body1'>
            By signing up you agree to the&nbsp;
            <Link
              onClick={ onOpenTermsOfService }
              role='button'
              tabIndex='0'
              onKeyUp={ handleEnterKey }
            >
              Terms and Conditions          
            </Link>
          </Typography>
          <PrimaryButton type='submit' inProgress={submitInProgress}>
            Sign up
          </PrimaryButton>
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
