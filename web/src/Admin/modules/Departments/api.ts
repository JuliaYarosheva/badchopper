import {GET} from '../../../utils/api';
import {ROUTE} from './const';

export const getDepartmentDetail = (id) => {
    return GET(`${ROUTE.GET_DEPARTMENT_DETAIL}/${id}`)
};
