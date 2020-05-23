import { createContext } from 'react';
import {DepartmentsModalsContextType} from './components/DepartmentsModalsProvider/types';

export const MODALS = {
  ADD_DEPARTMENT_MODAL: 'ADD_DEPARTMENT_MODAL'
};

const defaultProps: DepartmentsModalsContextType = {};

export const DepartmentsModalsContext = createContext(defaultProps);
