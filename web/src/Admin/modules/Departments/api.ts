import {GET, POST} from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addDepartment = (data) => {
    return POST(ENDPOINTS.ADD_DEPARTMENT, data)
};

export const getAllDepartments = () => {
    return GET(ENDPOINTS.GET_ALL_DEPARTMENTS)
};

export const getDepartmentDetail = (id) => {
    return GET(`${ENDPOINTS.GET_DEPARTMENT_DETAIL}/${id}`)
};
