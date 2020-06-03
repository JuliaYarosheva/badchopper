import React, {useEffect, useState} from 'react';
import {DepartmentsListHeader} from './DepartmentsListHeader';
import {DepartmentsListContent} from './DepartmentsListContent';
import {getAllDepartments} from '../../api';

type DepartmentsDataType = object[]

const DepartmentsDataInitialValues = [];

const DepartmentsList = () => {
    const [departmentsData, setDepartmentsData] = useState<DepartmentsDataType>(DepartmentsDataInitialValues);

    useEffect(() => {
        getAllDepartments()
            .then(({ data }) => setDepartmentsData(data))
    }, []);

    return (
        <>
            <DepartmentsListHeader/>
            <DepartmentsListContent
                departmentsData={departmentsData}
            />
        </>
    );
};

export {DepartmentsList};
