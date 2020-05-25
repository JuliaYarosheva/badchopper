import {createContext} from 'react';
import {AdminAppContextType} from './types';

const AdminAppFormContextDefaultValues: AdminAppContextType = {
    handleShowOverlayCloak: () => {}
};

export const AdminAppContext = createContext(AdminAppFormContextDefaultValues);
