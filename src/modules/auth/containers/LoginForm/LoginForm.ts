import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { submitForm } from '@ackee/mateus';

import config from 'config';

import LoginForm from '../../components/LoginForm';
import { loginForm } from '../../services/actions';

import validate from './LoginForm.validate';

export default compose<ReturnType<typeof connect>>(
    connect(null, {
        // TODO: bug in @ackee/mateus types - loginForm is action crater not an actual action
        // @ts-ignore
        onSubmit: submitForm(config.forms.login, loginForm),
    }),
    injectIntl,
    reduxForm({
        form: config.forms.login,
        validate,
    }),
)(LoginForm);
