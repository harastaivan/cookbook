import * as ReduxUtils from '@ackee/redux-utils';

const { createAsyncType, strictObjectAccess } = ReduxUtils;

const createTypes = createAsyncType('sentry');

export const types = strictObjectAccess(
    createTypes({
        types: ['SET_SENTRY_EVENT_ID'],
    }),
);

export const setSentryEventId = eventId => ({
    type: types.SET_SENTRY_EVENT_ID,
    payload: {
        eventId,
    },
});
