import { createStore } from 'redux';
import type { Store } from 'redux';
import { END } from 'redux-saga';

import * as Consts from 'constants/index';

import rootReducer from '../services/reducer';
import rootSaga from '../services/saga';

import configureEnhancer from './enhancer';

export default function configureStore() {
    const initialState = {};
    const { enhancer, sagaMiddleware } = configureEnhancer();

    type SagaStoreExtension = {
        runSaga?: typeof sagaMiddleware.run;
        close?: () => void;
    };
    const store: Store & SagaStoreExtension = createStore(rootReducer, initialState, enhancer);

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if (!Consts.isServerEnv) {
        store.runSaga(rootSaga);
    }

    return store;
}
