import React from 'react';
import {Typography} from '../../../../baseComponents/Typography/Typography';

import chevronDown from '@iconify/icons-mdi/chevron-down';
import chevronRight from '@iconify/icons-mdi/chevron-right';
import { Icon } from "@iconify/react";
import classes from './styles/index.module.scss';
import {getNavigationItemIcon} from '../../utils';
import ClassNames from 'classnames';

const NavigationListItemWithItems = (
    {
        item,
        open,
        setOpen
    }
) => {
    const collapseIcon = open ? chevronDown : chevronRight;
    const componentClassName = ClassNames(
            {
                [classes.navigationListItemWithItems_open]: open

            },
        classes.navigationListItemWithItems
    );

    return (
        <div
            onClick={() => setOpen(!open)}
            className={componentClassName}
        >
                <div className={classes.navigationListItemWithItems__leftSection}>
                    <Icon
                        icon={getNavigationItemIcon(item.icon)}
                        className={classes.adminNavigationList__icon}
                    />
                    <Typography
                        variant="14"
                    >
                        { item.label }
                    </Typography>
                </div>
                <Icon
                    icon={collapseIcon}
                    className={classes.navigationListItemWithItems__iconCollapse}
                />
        </div>
    );
};

export {NavigationListItemWithItems};
