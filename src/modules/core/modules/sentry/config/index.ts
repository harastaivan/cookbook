import createSentryMiddleware from 'redux-sentry-middleware';
import * as Sentry from '@sentry/browser';

import { authUserSelector } from 'modules/auth';

import * as Log from 'config/loglevel';
import * as Consts from 'constants/index';
import config from 'config';

declare global {
    interface Window {
        requestIdleCallback: (cb: IdleRequestCallback, options?: IdleRequestOptions) => number;
    }
}

const options = {
    dsn: config.sentry.dsn,
    debug: false,
    environment: process.env.NODE_ENV,
    release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
};

if (!options.dsn && !Consts.isServerEnv) {
    const projectName = window.encodeURIComponent(config.appName);
    const url = `https://sentry.ackee.cz/settings/ackee-production/projects/${projectName}/keys/`;

    Log.warn(`[Sentry]: Add your project 'dsn' to 'src/config/config.js.\n${url}`);
}

export const initializeSentry = () => {
    const init = () => Sentry.init(options);

    !Consts.isServerEnv && window.requestIdleCallback ? window.requestIdleCallback(init) : init();
};

// docs: https://github.com/vidit-sh/redux-sentry-middleware#sentry-middleware-for-redux
export const sentryMiddleware = createSentryMiddleware(Sentry, {
    // !!! YOU MAY NOT WANT TO SEND SOME SENSITIVE DATA TO SENTRY
    actionTransformer: action => action,
    stateTransformer: state => state,
    // @use-auth-module-begin
    getUserContext: authUserSelector,
    // @use-auth-module-end
});
