import React from 'react';
import {FORMS} from '../../consts';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Field} from '../../../../baseComponents/Form';
import {Textbox} from '../../../../baseComponents/Form/Adapters';
import Form from '../../../../baseComponents/Form';

const DepartmentAddModalForm = (
    {
        handleAddDepartment
    }
) => {
    return (
        <Form
            name={FORMS.ADD_DEPARTMENT_FORM}
            onSubmit={handleAddDepartment}
        >
            <FormLayout>
                <FormLayoutItemGroup>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="name"
                            label="!!!Название филиала"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                </FormLayoutItemGroup>
            </FormLayout>
        </Form>
    );
};

export {DepartmentAddModalForm};
