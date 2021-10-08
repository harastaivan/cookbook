import csAntd from "antd/es/locale-provider/cs_CZ";
import * as translations from "translations";
import { availableLanguages } from '../constants';

export const languages = Object.values(availableLanguages);

export const intlData = {
    [availableLanguages.CS]: translations.cs,
};

export const antdData = {
    [availableLanguages.CS]: csAntd,
};
