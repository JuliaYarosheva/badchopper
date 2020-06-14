import {actionLogger, removeArrayElementById} from '../../../../utils';

import {
    SET_ASSISTANCE,
    DELETE_ASSISTANCE
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case SET_ASSISTANCE:
            return {
                ...state,
                assistance: [...state.assistance, ...payload.assistance]
            };
        case DELETE_ASSISTANCE:
            return {
                ...state,
                assistance: removeArrayElementById(state.assistance, payload.assistanceId, '_id')
            };
        default:
            throw new Error();
    }
};
