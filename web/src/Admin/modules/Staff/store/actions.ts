import {SET_STAFF} from './const';

export default (dispatch) => {
    const setAllStaff = (staffList) => {
        dispatch({
            type: SET_STAFF,
            staffList
        });
    };

    return {
        setAllStaff
    };
};
