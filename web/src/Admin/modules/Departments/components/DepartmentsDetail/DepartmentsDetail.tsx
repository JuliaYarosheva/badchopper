import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {DepartmentsDetailHeader} from './DepartmentsDetailHeader';
import {DepartmentsDetailContent} from './DepartmentsDetailContent';
import {getDepartmentDetail} from '../../api';
import {PendingCloak} from '../../../../baseComponents/PendingCloak/PendingCloak';

type DepartmentsDetailDataType = {
    name: string
}

const DepartmentsDetail = () => {
    const { id } = useParams();

    const [departmentData, setDepartmentData] = useState<DepartmentsDetailDataType>();
    const [pending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        getDepartmentDetail(id)
            .then(({ data }) => {
                setDepartmentData(data);
                setPending(false);
            })
            .catch(error => console.log(error))

    }, [id]);

    return (
        <>
            {
                pending && (
                    <PendingCloak/>
                )
            }
            {
                !pending && departmentData && (
                   <>
                       <DepartmentsDetailHeader
                           departmentData={departmentData}
                       />
                       <DepartmentsDetailContent
                           departmentData={departmentData}
                       />
                   </>
                )
            }
        </>
    );
};

export {DepartmentsDetail};
