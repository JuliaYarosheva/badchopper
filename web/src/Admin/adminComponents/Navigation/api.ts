import {GET} from '../../../utils/api';
import {ROUTE} from './consts';

export const initNavigationList = () => {
    return GET(ROUTE.GET_NAVIGATION_LIST)
};
