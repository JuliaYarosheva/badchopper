import React from 'react';
import {NavigationListItem} from './NavigationListItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';

const NavigationListCollapseSection = (
    {
        items
    }
) => {
    return (
        <div className={classes.navigationListCollapseSection}>
            {
                items.map(item => {
                    const key = getUniqueKey(item.label);

                    return (
                        <NavigationListItem
                            key={key}
                            item={item}
                            className={classes.navigationListCollapseSection__item}
                            activeLinkClass={classes.navigationListCollapseSection__activeItem}
                        />
                    )
                })
            }
        </div>
    );
};

export {NavigationListCollapseSection};
