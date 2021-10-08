import React from 'react';
import { Form } from 'redux-form';
import { Button } from 'antd';
import { TextField } from '@ackee/mateus';
import { FormattedMessage } from 'react-intl';

interface LoginFormProps {
    handleSubmit: () => void;
    submitting: boolean;
    error?: string;
}

function LoginForm({ handleSubmit, submitting, error = '' }: LoginFormProps) {
    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                id="email"
                name="email"
                disabled={submitting}
                label={<FormattedMessage id="login.email" />}
                autoComplete="email"
                autoFocus
            />

            <TextField
                id="password"
                name="password"
                type="password"
                disabled={submitting}
                label={<FormattedMessage id="login.password" />}
                autoComplete="current-password"
            />

            <Button id="submitButton" htmlType="submit" disabled={submitting}>
                <FormattedMessage id="login.submit" />
            </Button>

            {error && <p>{error}</p>}
        </Form>
    );
}

export default LoginForm;
