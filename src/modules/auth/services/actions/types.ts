import { createAsyncType } from "@ackee/redux-utils";

const asyncType = createAsyncType({
    modulePrefix: 'auth',
});

export default {
    ...asyncType({
        types: ['LOGIN_FORM'],
    }),
};
