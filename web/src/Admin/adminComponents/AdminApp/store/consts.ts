import { createContext } from 'react';
import {AdminAppContextType} from '../types';

const AdminAppContextDefaultValues: AdminAppContextType = {
    setHandleOverlayClose: () => {},
    handleShowOverlayCloak: () => {},
};

export const AdminAppContext = createContext(AdminAppContextDefaultValues);
