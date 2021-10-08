import * as sagaEffects from 'redux-saga/effects';

import { saga as sentrySaga } from 'modules/core/modules/sentry';
import { saga as localizationSaga } from 'modules/core/modules/localization';

import saga from 'services/sagas';

const { all } = sagaEffects;

export default function* rootSaga() {
    yield all([sentrySaga(), localizationSaga(), saga()]);
}
