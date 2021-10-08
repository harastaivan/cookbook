import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import * as Petrus from '@ackee/petrus';

import { userEmailSelector } from '../services/selectors';

function AuthContent() {
    const dispatch = useDispatch();
    const userEmail = useSelector(userEmailSelector);

    return (
        <>
            <div>Signed in user: {userEmail}</div>
            <button type="button" onClick={() => dispatch(Petrus.logoutRequest())}>
                <FormattedMessage id="logout" />
            </button>
        </>
    );
}

export default AuthContent;
