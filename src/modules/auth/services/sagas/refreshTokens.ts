import { api } from 'config/antonio';
import config from 'config';

export default function* refreshTokens({ refreshToken }) {
    const {
        data: { credentials },
    } = yield* api.post(config.api.refresh, null, {
        params: {
            token: refreshToken.token,
        },
    });

    return {
        accessToken: credentials.accessToken,
        refreshToken,
    };
}
