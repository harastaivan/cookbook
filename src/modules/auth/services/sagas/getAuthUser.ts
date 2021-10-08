import { authApi } from 'config/antonio';
import config from 'config';

export default function* getAuthUser() {
    const { data } = yield* authApi.get(config.api.me);

    return data;
}
