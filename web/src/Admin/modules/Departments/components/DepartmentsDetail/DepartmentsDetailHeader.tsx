import React from 'react';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';

const DepartmentsDetailHeader = (
    {
        departmentData
    }
) => {
    return (
        <div
            className={classes.departmentsDetailHeader}
            style={{
                backgroundImage: `url(http://localhost:4040/${departmentData.image.path})`
            }}
        >
                <Typography
                    light
                    variant="28"
                    className={classes.departmentsDetailHeader__label}
                >
                    {departmentData?.name}
                </Typography>
        </div>
    );
};

export {DepartmentsDetailHeader};
