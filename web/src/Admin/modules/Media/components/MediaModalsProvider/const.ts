import { createContext } from 'react';
import {DepartmentsModalsContextType} from './types';

export const MODALS = {
  ADD_MEDIA_MODAL: 'ADD_MEDIA_MODAL',
  DELETE_MEDIA_MODAL: 'DELETE_MEDIA_MODAL',
};

const defaultProps: DepartmentsModalsContextType = {};

export const MediaModalsContext = createContext(defaultProps);
