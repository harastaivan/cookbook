import type { TRule } from 'fela';

import * as theme from './theme';

export type Theme = typeof theme;

export type ThemeProps = { theme: Theme };

export type TRuleWithTheme<Props = {}> = TRule<ThemeProps & Props>;

export type RulesExtend<TExtandalbeRules, TProps = {}> = Partial<
    Record<keyof TExtandalbeRules, TRuleWithTheme<TProps>>
>;

export { theme };

export { default as vendors } from './vendors.less';
export { default as resets } from './resets.css';
