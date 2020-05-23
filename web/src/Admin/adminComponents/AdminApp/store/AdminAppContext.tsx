import React, {useState} from 'react';

import {
    AdminAppContext
} from './consts';
import {AdminAppContextType} from '../types';

export const AdminAppContextProvider = ({children}) => {
    const [showOverlayCloak, setShowOverlayCloak] = useState(false);
    const [handleOverlayClose, setHandleOverlayClose] = useState<() => void>();

    const handleShowOverlayCloak = (show) => {
        setShowOverlayCloak(show);
    };

    const contextValues: AdminAppContextType = {
        showOverlayCloak,
        handleOverlayClose,
        setHandleOverlayClose,
        handleShowOverlayCloak
    };

    return (
        <AdminAppContext.Provider
            value={contextValues}
        >
            {children}
        </AdminAppContext.Provider>
    );
};

