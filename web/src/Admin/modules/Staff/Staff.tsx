import React from 'react';
import {
    Route
} from "react-router-dom";

import {StaffBarbers} from './components/StaffBarbers/StaffBarbers';
import {StaffManagers} from './components/StaffManagers/StaffManagers';
import {ROUTES} from '../../adminComponents/Content/routes';
import {StaffModalsProvider} from './components/StaffModalsProvider/StaffModalsProvider';

const Staff = () => {
    return (
        <StaffModalsProvider>
            <Route path={ROUTES.STAFF_BARBERS}>
                <StaffBarbers/>
            </Route>
            <Route path={ROUTES.STAFF_MANAGERS}>
                <StaffManagers/>
            </Route>
        </StaffModalsProvider>
    );
};

export {Staff};
