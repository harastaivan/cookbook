import * as Consts from "constants/index";

export const plugins = {
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker: !Consts.isServerEnv && false,

    // Enable Sentry only in prouduction environment
    sentry: Consts.isEnvProduction,
};
