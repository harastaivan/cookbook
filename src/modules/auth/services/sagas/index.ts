import * as sagaEffects from "redux-saga/effects";

import { saga as petrus } from '../../config/petrus';
import loginForm from './loginForm';

const { all } = sagaEffects;

export default function*() {
    yield all([loginForm(), petrus()]);
}
