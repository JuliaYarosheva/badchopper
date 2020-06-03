import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {DepartmentsDetailHeader} from './DepartmentsDetailHeader';
import {DepartmentsDetailContent} from './DepartmentsDetailContent';
import {getDepartmentDetail} from '../../api';

type DepartmentsDetailDataType = {
    name: string
}

const DepartmentsDetailDataInitialValues = {
    name: ''
};

const DepartmentsDetail = () => {
    const { id } = useParams();

    const [departmentData, setDepartmentData] = useState<DepartmentsDetailDataType>(DepartmentsDetailDataInitialValues);
    useEffect(() => {
        getDepartmentDetail(id)
            .then(({ data }) => setDepartmentData(data))
            .catch(error => console.log(error))

    }, [id]);

    return (
        <>
            <DepartmentsDetailHeader
                departmentName={departmentData.name}
            />
            <DepartmentsDetailContent
                departmentData={departmentData}
            />
        </>
    );
};

export {DepartmentsDetail};
