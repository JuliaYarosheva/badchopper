import {GET, POST, PUT, DELETE} from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addStaff = (data) => {
    return POST(ENDPOINTS.ADD_STAFF, data)
};

export const editStaff = (data) => {
    return PUT(ENDPOINTS.UPDATE_STAFF, data)
};

export const deleteStaff = (data) => {
    return DELETE(ENDPOINTS.DELETE_STAFF, data)
};

export const getAllStaff = () => {
    return GET(ENDPOINTS.GET_ALL_STAFF)
};
