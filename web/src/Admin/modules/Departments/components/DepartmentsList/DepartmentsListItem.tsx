import React from 'react';

const DepartmentsListItem = (
    {
        departmentItem
    }
) => {
    return (
        <div>{departmentItem.name}</div>
    );
};

export {DepartmentsListItem};
