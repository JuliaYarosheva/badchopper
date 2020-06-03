import React, { useEffect, useState } from 'react';
import {getDepartmentDetail} from '../../api';

const DepartmentsDetailContent = () => {
    const [departmentData, setDepartmentData] = useState({});
    useEffect(() => {
        getDepartmentDetail('id')
            .then(({ data }) => setDepartmentData(data))
    }, []);

    console.log(departmentData);

    return (
        <div>###NEW COMPONENT</div>
    );
};

export {DepartmentsDetailContent};
