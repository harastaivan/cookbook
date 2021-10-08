import React from 'react';
import type { ReactNode } from 'react';
import * as serviceWorker from 'serviceWorker';

import * as config from '../config';

import { StylesProvider, ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';

import { Fela } from '../modules/fela';
import { Redux } from '../modules/redux';
import { Router } from '../modules/router';
import { initializeSentry } from '../modules/sentry';

import Enhancers from '../containers/Enhancers';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
config.plugins.serviceWorker ? serviceWorker.register() : serviceWorker.unregister();

if (config.plugins.sentry) {
    initializeSentry();
}

interface CoreProps {
    children: ReactNode;
}

function Core({ children }: CoreProps) {
    return (
        <Redux>
            <Fela>
                <ThemeProvider theme={theme}>
                    <StylesProvider injectFirst>
                        <Router>
                            <Enhancers>{children}</Enhancers>
                        </Router>
                    </StylesProvider>
                </ThemeProvider>
            </Fela>
        </Redux>
    );
}

export default Core;
