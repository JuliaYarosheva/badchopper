import React from 'react';
import {NavigationUserInfo} from './components/NavigationUserInfo/NavigationUserInfo';
import {NavigationList} from './components/NavigationList/NavigationList';

import classes from './styles/index.module.scss'

const Navigation = () => {
    return (
        <div className={classes.adminNavigation}>
            <NavigationUserInfo/>
            <NavigationList/>
        </div>
    );
};

export { Navigation };
