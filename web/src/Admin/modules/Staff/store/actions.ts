import {SET_ALL_STAFF} from './const';

export default (dispatch) => {
    const setAllDepartments = (departmentsList) => {
        dispatch({
            type: SET_ALL_STAFF,
            departmentsList
        });
    };

    return {
        setAllDepartments
    };
};
