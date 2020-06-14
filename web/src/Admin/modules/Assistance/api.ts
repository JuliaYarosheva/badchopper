import { GET, DELETE, POST } from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addAssistance = (data) => {
    return POST(ENDPOINTS.ADD_ASSISTANCE, data);
};

export const getAllAssistance = () => {
    return GET(ENDPOINTS.GET_ALL_ASSISTANCE);
};

export const deleteAssistance = (id) => {
    return DELETE(ENDPOINTS.DELETE_ASSISTANCE, {id});
};
