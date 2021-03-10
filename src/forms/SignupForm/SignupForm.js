import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import * as validators from '../../util/validators';
// import { makeStyles } from '@material-ui/core/styles';
import { Form, PrimaryButton, FieldTextInput } from '../../components';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const KEY_CODE_ENTER = 13;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
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

      // email
      const emailLabel = intl.formatMessage({
        id: 'SignupForm.emailLabel',
      });
      const emailPlaceholder = intl.formatMessage({
        id: 'SignupForm.emailPlaceholder',
      });
      const emailRequiredMessage = intl.formatMessage({
        id: 'SignupForm.emailRequired',
      });
      const emailRequired = validators.required(emailRequiredMessage);
      const emailInvalidMessage = intl.formatMessage({
        id: 'SignupForm.emailInvalid',
      });
      const emailValid = validators.emailFormatValid(emailInvalidMessage);

      // password
      const passwordLabel = intl.formatMessage({
        id: 'SignupForm.passwordLabel',
      });
      const passwordPlaceholder = intl.formatMessage({
        id: 'SignupForm.passwordPlaceholder',
      });
      const passwordRequiredMessage = intl.formatMessage({
        id: 'SignupForm.passwordRequired',
      });
      const passwordMinLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooShort',
        },
        {
          minLength: validators.PASSWORD_MIN_LENGTH,
        }
      );
      const passwordMaxLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooLong',
        },
        {
          maxLength: validators.PASSWORD_MAX_LENGTH,
        }
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

      // firstName
      const firstNameLabel = intl.formatMessage({
        id: 'SignupForm.firstNameLabel',
      });
      const firstNamePlaceholder = intl.formatMessage({
        id: 'SignupForm.firstNamePlaceholder',
      });
      const firstNameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.firstNameRequired',
      });
      const firstNameRequired = validators.required(firstNameRequiredMessage);

      // lastName
      const lastNameLabel = intl.formatMessage({
        id: 'SignupForm.lastNameLabel',
      });
      const lastNamePlaceholder = intl.formatMessage({
        id: 'SignupForm.lastNamePlaceholder',
      });
      const lastNameRequiredMessage = intl.formatMessage({
        id: 'SignupForm.lastNameRequired',
      });
      const lastNameRequired = validators.required(lastNameRequiredMessage);

      const submitInProgress = inProgress;
      const submitDisabled = invalid || submitInProgress;

      const handleTermsKeyUp = e => {
        // Allow click action with keyboard like with normal links
        if (e.keyCode === KEY_CODE_ENTER) {
          onOpenTermsOfService();
        }
      };
      const termsLink = (
        <span
          onClick={onOpenTermsOfService}
          role="button"
          tabIndex="0"
          onKeyUp={handleTermsKeyUp}
        >
          <FormattedMessage id="SignupForm.termsAndConditionsLinkText" />
        </span>
      );
      
      const classes = useStyles();

      return (
        <Form onSubmit={ handleSubmit }>
          <TextField
            name="fname"
            id={formId ? `${formId}.fname` : 'fname'}
            validate={ firstNameRequired }
            placeholder="First Name"
            autoComplete="given-name"
            margin="normal"
            variant="outlined"
            style={{ margin: 8 }}
            InputLabelProps={{ shrink: true }}
            // fullWidth
            // label="Label"
            // label={firstNameLabel}
            // placeholder={firstNamePlaceholder}
            // helperText="Full width!"
          />
          <TextField
            name="lname"
            id={formId ? `${formId}.lname` : 'lname'}
            validate={ lastNameRequired }
            placeholder="Last Name"
            autoComplete="family-name"
            margin="normal"
            variant="outlined"
            style={ { margin: 8 } }
            InputLabelProps={ { shrink: true } }
            // fullWidth
            // label="Label"
            // label={firstNameLabel}
            // placeholder={firstNamePlaceholder}
            // helperText="Full width!"
          />
          <TextField
            name="email"
            type="email"
            id={ formId ? `${formId}.email` : 'email' }
            validate={ validators.composeValidators(emailRequired, emailValid) }
            placeholder="Email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            style={ { margin: 8 } }
            InputLabelProps={ { shrink: true } }
            // fullWidth
            // label="Label"
            // label={firstNameLabel}
            // placeholder={firstNamePlaceholder}
            // helperText="Full width!"
          />
          <TextField
            name="password"
            type="password"
            id={ formId ? `${formId}.password` : 'password' }
            validate={ passwordValidators }
            placeholder="Password"
            autoComplete="new-password"
            margin="normal"
            variant="outlined"
            style={ { margin: 8 } }
            InputLabelProps={ { shrink: true } }
            // fullWidth
            // label="Label"
            // label={firstNameLabel}
            // placeholder={firstNamePlaceholder}
            // helperText="Full width!"
          />
          <div>
            <p>
              <FormattedMessage
                id="SignupForm.termsAndConditionsAcceptText"
                values={{ termsLink }}
              />
            </p>
            <PrimaryButton type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
              <FormattedMessage id="SignupForm.signUp" />
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
