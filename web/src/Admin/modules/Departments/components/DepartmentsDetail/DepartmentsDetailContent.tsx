import React, { useMemo } from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentAddContent} from '../DepartmentAdd/DepartmentAddContent';
import getDepartmentInitialValues from '../../utils/getDepartmentInitialValues';
import {isUndefined} from '../../../../../utils';
import classes from './styles/index.module.scss';

const DepartmentsDetailContent = (
    {
        departmentData
    }
) => {
    const initialValues = useMemo(() => {
        if (isUndefined(departmentData)) return;

        return getDepartmentInitialValues(departmentData);
    }, [departmentData]);

    return (
        <ContentLayout
            className={classes.departmentsDetailContent}
        >
            <DepartmentAddContent
                initialValues={initialValues}
            />
        </ContentLayout>
    );
};

export {DepartmentsDetailContent};
