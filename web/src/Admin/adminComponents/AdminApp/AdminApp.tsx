import React, { useContext } from 'react';

import {Navigation} from '../Navigation/Navigation';
import {Content} from '../Content/Content';
import {OverlayCloak} from '../../baseComponents/OverlayCloak/OverlayCloak';
import {AdminAppContext} from './store/consts';
import {AdminAppContextProvider} from './store/AdminAppContext';

const AdminApp = () => {
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
            <AdminApp />
    </AdminAppContextProvider>
);


export default AdminAppWithContexts;


