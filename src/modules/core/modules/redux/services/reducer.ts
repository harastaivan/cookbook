import { combineReducers } from 'redux';

import { reducer as translateReducer } from 'modules/core/modules/localization';
import { connectRouterWithHistory } from 'modules/core/modules/router';
import { reducer as sentryReducer } from 'modules/core/modules/sentry';

import reducers from 'services/reducers';

export default combineReducers({
    ...reducers,
    translate: translateReducer,
    router: connectRouterWithHistory,
    sentry: sentryReducer,
});
