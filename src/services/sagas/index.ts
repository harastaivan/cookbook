import { all } from 'redux-saga/effects';

import { submitFormSaga } from '@ackee/mateus';
// @use-auth-module-begin
import { saga as auth } from 'modules/auth';
// @use-auth-module-end

export default function* appSaga() {
    yield all([
        // @use-auth-module-begin
        auth(),
        // @use-auth-module-end
        submitFormSaga(),
    ]);
}
