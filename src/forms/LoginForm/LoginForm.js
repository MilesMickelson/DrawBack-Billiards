import React, {
  useState,
  useEffect
} from 'react';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { Form as FinalForm } from 'react-final-form';

import * as validators from '../../util/validators';
import { injectIntl, intlShape } from '../../util/reactIntl';
import {
  Form,
  FieldTextInput,
  NamedLink,
  PrimaryButton
} from '../../components';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const KEY_CODE_ENTER = 13;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DrawBack Billiards
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

      const classes = useStyles();
      return (
        <Form onSubmit={ handleSubmit }>
          <div className='flex-col-center five-sixty-max'>
            <Typography variant='h2'>Welcome to DrawBack Billiards</Typography>
            <Avatar className={ classes.avatar }>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h4'>
              Sign in
            </Typography>
            <FieldTextInput
              name='email'
              type='email'
              id={ formId ? `${formId}.email` : 'email' }
              placeholder='Email'
              autoComplete='email'
              variant='outlined'
              color='primary'
              margin="normal"
              autoFocus
              required
              fullWidth
            />
            <FieldTextInput
              name='password'
              type='password'
              id={ formId ? `${formId}.password` : 'password' }
              placeholder='Password'
              autoComplete='new-password'
              variant='outlined'
              color='primary'
              required
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <PrimaryButton
              className={ classes.submit }
            >
              Sign In
            </PrimaryButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" name="PasswordRecoveryPage">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
          {/*

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
          */}
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
