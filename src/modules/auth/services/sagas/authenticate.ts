import config from 'config';
import { api } from 'config/antonio';

export default function* authenticate({ email, password }) {
    const {
        data: { credentials, user },
    } = yield* api.post(config.api.signIn, {
        email,
        password,
    });

    return {
        tokens: credentials,
        user,
    };
}
