import React from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';

const DepartmentsDetailContent = (
    {
        departmentData
    }
) => {
    return (
        <ContentLayout>
            {departmentData.name}
        </ContentLayout>
    );
};

export {DepartmentsDetailContent};
