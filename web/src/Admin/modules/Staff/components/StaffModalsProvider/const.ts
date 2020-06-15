import {createContext} from 'react';
import {ModalsProviderContextType} from '../../../../../types';

export const MODALS = {
    DELETE_STAFF_MODAL: 'DELETE_STAFF_MODAL',
    ADD_STAFF_MODAL: 'ADD_STAFF_MODAL',
};

const defaultProps: ModalsProviderContextType = {};

export const StaffModalsContext = createContext(defaultProps);
