import React from 'react';

//to delete
import data from '../../testData';
//to delete

import {NavigationListItem} from './NavigationListItem';
import {NavigationListItemCollapse} from './NavigationListItemCollapse';

import { NavigationItemType } from './types';
import classes from './styles/index.module.scss';
import {getUniqueKey} from '../../../../../utils';

const NavigationList = () => {
    return (
        <div className={classes.adminNavigationList}>
            {
                data.navigation.map((item: NavigationItemType) => {
                    const key = getUniqueKey(item.label);

                    return item.items.length === 0
                        ? <NavigationListItem key={key} item={item} />
                        : <NavigationListItemCollapse key={key} item={item}/>
                })
            }
        </div>
    );
};

export { NavigationList };
