import React from 'react';
import {StaffListHeader} from '../StaffListHeader/StaffListHeader';

const StaffManagers = () => {
    return (
        <>
            <StaffListHeader
                headerLabel="!!Менеджеры"
                isManagerLayout
            />
        </>
    );
};

export {StaffManagers};
