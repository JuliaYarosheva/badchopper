import React from 'react';
import ContentHeader, {ContentHeaderLeft} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
const DepartmentsDetailHeader = (
    {
        departmentName
    }
) => {
    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography variant="24">
                    {departmentName}
                </Typography>
            </ContentHeaderLeft>
        </ContentHeader>
    );
};

export {DepartmentsDetailHeader};
