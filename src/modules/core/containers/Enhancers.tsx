import React from 'react';
import type { ReactNode } from 'react';
import { compose } from 'redux';

import { withErrorBoundary } from '../modules/error-boundary';
import { withTranslatable } from '../modules/localization';

const Children = ({ children }: { children: ReactNode }) => <>{children}</>;

export default compose<typeof Children>(withTranslatable, withErrorBoundary)(Children);
