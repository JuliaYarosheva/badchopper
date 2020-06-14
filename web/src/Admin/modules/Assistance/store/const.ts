import {createContext} from 'react';
import { MediaContextType } from './types';

const AssistanceContextDefaultValues = {
    assistance: [],
    setAssistance: () => {},
    removeOneAssistance: () => {}
};

export const SET_ASSISTANCE = 'SET_ASSISTANCE';
export const DELETE_ASSISTANCE = 'DELETE_ASSISTANCE';
export const AssistanceContext = createContext<MediaContextType>(AssistanceContextDefaultValues);
export const initialState = {assistance: []};
