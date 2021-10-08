import React from 'react';
import { RendererProvider, ThemeProvider } from 'react-fela';
import { createRenderer } from 'fela';
import { theme } from 'styles';

import { applyStaticCSS, applyFonts } from '../utilities';
import * as config from '../config';

interface FelaProps {
    children: React.ReactNode;
}

function Fela({ children }: FelaProps) {
    const renderer = createRenderer(config.rendererConfig);

    React.useEffect(() => {
        applyStaticCSS(renderer, config.staticCSS);
        applyFonts(renderer, config.fonts);

        return () => {
            renderer.clear();
        };
    }, [renderer]);

    return (
        <RendererProvider renderer={renderer}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RendererProvider>
    );
}

export default Fela;
