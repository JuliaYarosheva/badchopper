import React from 'react';
import {MarginBox} from '../../baseComponents/MarginBox/MarginBox';
import classes from './styles/index.module.scss';

const ContentLayout = (
    {
        children
    }
) => {
    return (
        <MarginBox
            normal
            className={classes.contentLayout}
        >
            {children}
        </MarginBox>
    );
};

export {ContentLayout};
