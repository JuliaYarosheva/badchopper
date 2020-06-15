import { createContext } from 'react';
import {StaffContextType} from './types';

export const initialState = {
    staffList: [],
    setAllStaff: () => {}
};
export const StaffContext = createContext<StaffContextType>(initialState);
export const SET_ALL_STAFF = 'SET_ALL_STAFF';
