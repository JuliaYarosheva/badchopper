import { actionLogger } from '../../../../utils';

import {
    SET_ALL_STAFF
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
        case SET_ALL_STAFF:
            return {
                ...state,
                staffList: [...payload.staffList]
            };
		default:
			throw new Error();
	}
};
