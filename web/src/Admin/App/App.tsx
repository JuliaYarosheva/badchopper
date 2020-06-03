import React, { useContext } from 'react';

import {NavigationWithContext as Navigation} from '../modules/Navigation/Navigation';
import {Content} from '../adminComponents/Content/Content';
import {OverlayCloak} from '../baseComponents/OverlayCloak/OverlayCloak';
import {AdminAppContext} from './store/AdminAppContext/consts';
import {AdminAppContextProvider} from './store/AdminAppContext/AdminAppContext';
import {AdminAppFormContextProvider} from './store/AdminAppFormContext/AdminAppFormContext';

const App = () => {
    const { showOverlayCloak, handleOverlayClose } = useContext(AdminAppContext);

    return (
        <div style={{ display: 'flex' }}>
            <Navigation />
            <Content />
            <OverlayCloak
                show={showOverlayCloak}
                handleOverlayClose={handleOverlayClose}
            />
        </div>
    );
};

const AdminAppWithContexts = () => (
    <AdminAppContextProvider>
        <AdminAppFormContextProvider>
            <App />
        </AdminAppFormContextProvider>
    </AdminAppContextProvider>
);

export default AdminAppWithContexts;


