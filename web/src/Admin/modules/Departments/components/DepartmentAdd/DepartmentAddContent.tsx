import React, {useContext} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentAddForm} from './DepartmentAddForm';
import {addDepartmentHook} from './hooks';
import {DepartmentsContext} from '../../store';
import {NavigationContext} from '../../../../adminComponents/Navigation/store';
import {getNavigationList} from '../../../../adminComponents/Navigation/api';
import {getAllDepartments} from '../../api';

const DepartmentAddContent = () => {
    const {setAllDepartments} = useContext(DepartmentsContext);
    const {setNavigationList} = useContext(NavigationContext);

    const onAddDepartmentSuccess = () => {
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
            });

        getAllDepartments()
            .then(({ data }) => {
                setAllDepartments(data);
            })
    };

    const handleAddDepartment = (values) => {
        addDepartmentHook(values, onAddDepartmentSuccess)
    };

    return (
        <ContentLayout>
            <DepartmentAddForm
                handleAddDepartment={handleAddDepartment}
            />
        </ContentLayout>
    );
};

export {DepartmentAddContent};
