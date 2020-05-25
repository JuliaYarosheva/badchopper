import { createContext } from 'react';
import {DepartmentsModalsContextType} from './components/DepartmentsModalsProvider/types';

export const MODALS = {
  ADD_DEPARTMENT_MODAL: 'ADD_DEPARTMENT_MODAL'
};

export const FORMS = {
    ADD_DEPARTMENT_FORM: 'ADD_DEPARTMENT_FORM'
};

const defaultProps: DepartmentsModalsContextType = {};

export const DepartmentsModalsContext = createContext(defaultProps);
