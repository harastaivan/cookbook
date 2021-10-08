import React from 'react';
import type { ReactNode } from 'react';
import { Spin as AntdSpin } from 'antd';

import { useFelaEnhanced } from 'hooks';
import type { RulesExtend } from 'styles';

import * as felaRules from './Loader.styles';

export interface LoaderProps {
    show: boolean;
    children?: ReactNode;
    inline?: boolean;
    extend?: RulesExtend<typeof felaRules>;
}

const Loader = ({ show, children = null, inline = false, extend }: LoaderProps) => {
    const { styles } = useFelaEnhanced(felaRules, { extend, inline });

    return show ? (
        <div className={styles.loader}>
            <AntdSpin />
        </div>
    ) : (
        <>{children}</>
    );
};

export default Loader;
