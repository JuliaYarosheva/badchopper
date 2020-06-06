import { createContext } from 'react';
import {DepartmentsModalsContextType} from './types';

export const MODALS = {
  MEDIA_SELECT_MODAL: 'MEDIA_SELECT_MODAL'
};

const defaultProps: DepartmentsModalsContextType = {};

export const DepartmentsModalsContext = createContext(defaultProps);
