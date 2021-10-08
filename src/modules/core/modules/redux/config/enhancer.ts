import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerMiddlewareWithHistory } from 'modules/core/modules/router';
import { sentryMiddleware } from 'modules/core/modules/sentry';

import config from 'config';
import * as Log from 'config/loglevel';
import * as Consts from 'constants/index';
import type { StoreEnhancer } from 'redux';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export default function configureEnhancer() {
    const sagaMiddleware = createSagaMiddleware({
        onError: Log.error,
    });

    const middlewares = [routerMiddlewareWithHistory, sagaMiddleware, sentryMiddleware];
    const enhancerArgs = [applyMiddleware(...middlewares)];

    if (config.devTools && !Consts.isServerEnv) {
        // eslint-disable-next-line
        const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
        if (reduxDevTools) {
            enhancerArgs.push(
                reduxDevTools({
                    trace: true,
                }),
            );
        }
    }

    return {
        enhancer: compose(...enhancerArgs) as StoreEnhancer,
        sagaMiddleware,
    };
}
