import { Antonio } from '@ackee/antonio-core';
import { requestAuthHeaderInterceptor } from '@ackee/antonio-auth';

import config from 'config';

const api = new Antonio({
    baseURL: config.api.base,
});

// @use-auth-module-begin
const authApi = new Antonio({
    baseURL: config.api.base,
});

// Set the Authorization header before each req. with valid access token obtained from @ackee/petrus
authApi.interceptors.request.use(null, requestAuthHeaderInterceptor);
// @use-auth-module-end

export {
    api,
    // @use-auth-module-begin
    authApi,
    // @use-auth-module-end
};
