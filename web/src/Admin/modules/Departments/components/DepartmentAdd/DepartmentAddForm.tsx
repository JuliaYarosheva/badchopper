import React from 'react';
import {FORMS} from '../../const';
import Form from '../../../../baseComponents/Form';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {DepartmentAddFormGeneral} from './DepartmentAddFormGeneral';
import {DepartmentAddFormMedia} from './DepartmentAddFormMedia';

const DepartmentAddForm = (
    {
        handleAddDepartment
    }
) => {
    return (
        <Form
            name={FORMS.ADD_DEPARTMENT_FORM}
            onSubmit={handleAddDepartment}
        >
            <GridLayout>
                <GridLayoutRow grid="6-6">
                    <DepartmentAddFormGeneral/>
                    <DepartmentAddFormMedia/>
                </GridLayoutRow>
            </GridLayout>
        </Form>
    );
};

export {DepartmentAddForm};
