import React from 'react';
import {FORMS} from '../../const';
import Form from '../../../../baseComponents/Form';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {DepartmentAddFormGeneral} from './DepartmentAddFormGeneral';
import {DepartmentAddFormMedia} from './DepartmentAddFormMedia';

const DepartmentAddForm = (
    {
        selectedMediaId,
        handleSelectMedia,
        handleAddDepartment,
        handleDeleteImage,
        hasSelectedMedia,
        initialValues,
        hasInitialValues
    }
) => {
    return (
        <Form
            initialValues={initialValues}
            onSubmit={handleAddDepartment}
            name={FORMS.ADD_DEPARTMENT_FORM}
        >
            <GridLayout>
                <GridLayoutRow grid="6-6">
                    <DepartmentAddFormGeneral
                        hasInitialValues={hasInitialValues}
                    />
                    <DepartmentAddFormMedia
                        hasInitialValues={hasInitialValues}
                        hasSelectedMedia={hasSelectedMedia}
                        selectedMediaId={selectedMediaId}
                        handleDeleteImage={handleDeleteImage}
                        handleSelectMedia={handleSelectMedia}
                    />
                </GridLayoutRow>
            </GridLayout>
        </Form>
    );
};

export {DepartmentAddForm};
