import React from 'react';
import ReactDOM from 'react-dom';

import Core from 'modules/core';
import Application from 'modules/application';

ReactDOM.render(
    <React.StrictMode>
        <Core>
            <Application />
        </Core>
    </React.StrictMode>,
    document.getElementById('root'),
);
