import React from 'react';
import {StaffListHeader} from '../StaffListHeader/StaffListHeader';

const StaffBarbers = () => {
    return (
        <>
            <StaffListHeader
                headerLabel="!!!Мастера"
                isBarberLayout
            />
        </>
    );
};

export {StaffBarbers};
