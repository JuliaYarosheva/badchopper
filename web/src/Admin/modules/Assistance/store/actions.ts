import {SET_ASSISTANCE, DELETE_ASSISTANCE} from './const';

export default (dispatch) => {
    const setAssistance = (assistance) => {
        dispatch({
            type: SET_ASSISTANCE,
            assistance
        });
    };

    const removeOneAssistance = (assistanceId) => {
        dispatch({
            type: DELETE_ASSISTANCE,
            assistanceId
        });
    };

    return {
        setAssistance,
        removeOneAssistance
    };
};
