import React, { useEffect, useContext } from 'react';
import NavigationContextProvider, {NavigationContext} from './store';
import {NavigationUserInfo} from './components/NavigationUserInfo/NavigationUserInfo';
import {NavigationList} from './components/NavigationList/NavigationList';

import classes from './styles/index.module.scss'
import {initNavigationList} from './api';

const Navigation = () => {
    const {navigationList, setNavigationList} = useContext(NavigationContext);

    useEffect(() => {
        initNavigationList()
            .then(({ data }) => setNavigationList(data))
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.adminNavigation}>
            <NavigationUserInfo/>
            <NavigationList
                navigationList={navigationList}
            />
        </div>
    );
};

const NavigationWithContext = () => {
    return (
        <NavigationContextProvider>
            <Navigation />
        </NavigationContextProvider>
    );
};

export { NavigationWithContext };
