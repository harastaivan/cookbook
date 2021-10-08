import * as sagaEffects from 'redux-saga/effects';
import * as Sentry from '@sentry/browser';
import { actionTypes } from '@ackee/lucas';

import { setSentryEventId } from '../actions';

const { put, takeEvery } = sagaEffects;

function captureException({ error, extra }) {
    return new Promise(resolve => {
        Sentry.withScope(scope => {
            if (typeof extra === 'object') {
                for (const [key, value] of Object.entries(extra)) {
                    scope.setExtra(key, value);
                }
            }

            const eventId = Sentry.captureException(error);

            resolve(eventId);
        });
    });
}

function* errorHandler(action) {
    const eventId = yield captureException(action);

    yield put(setSentryEventId(eventId));
}

export default function* () {
    // LOG_ERROR is dispatched by the errorBoundary HOC (in componentDidCatched method)
    yield takeEvery(actionTypes.logging.LOG_ERROR, errorHandler);
}
