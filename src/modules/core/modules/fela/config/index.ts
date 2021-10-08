import * as Consts from "constants/index";
import { resets, vendors, theme } from "styles";

import plugins from './plugins';
import enhancers from './enhancers';

export const rendererConfig = {
    devMode: Consts.isEnvDevelopment,
    enhancers,
    plugins,
    theme,
};

export const staticCSS = [resets, vendors];

export const fonts = [
    // {
    //     name: '',
    //     files: [],
    //     options: {}
    // }
];
