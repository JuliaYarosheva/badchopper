import {GET, POST} from '../../../utils/api';
import {ROUTE} from './const';

export const addDepartment = (data) => {
    return POST(ROUTE.ADD_DEPARTMENT, data)
};

export const getAllDepartments = () => {
    return GET(ROUTE.GET_ALL_DEPARTMENTS)
};

export const getDepartmentDetail = (id) => {
    return GET(`${ROUTE.GET_DEPARTMENT_DETAIL}/${id}`)
};
