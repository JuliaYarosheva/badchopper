import React from 'react';
import {MarginBox} from '../../baseComponents/MarginBox/MarginBox';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const ContentLayout = (
    {
        children,
        className: classNameFromProps
    }
) => {
    const componentClassName = ClassNames(
        classes.contentLayout,
        classNameFromProps
    );

    return (
        <MarginBox
            normal
            className={componentClassName}
        >
            {children}
        </MarginBox>
    );
};

ContentLayout.defaultProps = {
    className: ''
};

export {ContentLayout};
