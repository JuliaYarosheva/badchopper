import React from 'react';
import {FORMS} from '../../const';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Field} from '../../../../baseComponents/Form';
import {Textbox, Textarea} from '../../../../baseComponents/Form/Adapters';
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
                    <FormLayoutItem>
                        <Field
                            component={Textarea}
                            name="description"
                            label="!!!Описание"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="city"
                            label="!!!Город"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="street"
                            label="!!!Улца"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="number"
                            label="!!!Улца"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="phone"
                            label="!!!Телефон"
                            required
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="latitude"
                            label="!!!Широта"
                            required
                            validate={{
                                required: true
                            }}
                            placeholder="00.000000"
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="longitude"
                            label="!!!Долгота"
                            required
                            validate={{
                                required: true
                            }}
                            placeholder="00.000000"
                        />
                    </FormLayoutItem>
                </FormLayoutItemGroup>
            </FormLayout>
        </Form>
    );
};

export {DepartmentAddModalForm};
