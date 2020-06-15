import React from 'react';
import Form, {Field} from '../../../../baseComponents/Form';
import {FORMS, positionDropDownItems} from '../../const';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {Dropdown, MediaSelector, Textarea, Textbox} from '../../../../baseComponents/Form/Adapters';

const AddStaffModalForm = (
    {
        handleAddStaff,
        mediaModalData,
        positionDropDownValue
    }
) => {
    return (
        <Form
            onSubmit={handleAddStaff}
            name={FORMS.ADD_STAFF_FORM}
        >
            <FormLayout>
                <FormLayoutItemGroup>
                    <GridLayout>
                        <GridLayoutRow
                            gridColumn={13}
                            grid='6-_1-6'
                        >
                            <FormLayoutItemGroup noPadding>
                                <FormLayoutItem>
                                    <Field
                                        component={Textbox}
                                        name="name"
                                        label="!!!Имя"
                                        required
                                        validate={{
                                            required: true,
                                            length: {
                                                max: 20
                                            }
                                        }}
                                        placeholder="Имя"
                                    />
                                </FormLayoutItem>
                                <FormLayoutItem>
                                    <Field
                                        component={Textbox}
                                        name="surname"
                                        label="!!!Фамилия"
                                        required
                                        validate={{
                                            required: true,
                                            length: {
                                                max: 20
                                            }
                                        }}
                                        placeholder="Фамилия"
                                    />
                                </FormLayoutItem>
                                <FormLayoutItem>
                                    <Field
                                        component={Textbox}
                                        name="patronymic"
                                        label="!!!Отчество"
                                        required
                                        validate={{
                                            required: true,
                                            length: {
                                                max: 20
                                            }
                                        }}
                                        placeholder="Отчество"
                                    />
                                </FormLayoutItem>
                            </FormLayoutItemGroup>
                            <FormLayoutItem>
                                <Field
                                    component={MediaSelector}
                                    mediaModalData={mediaModalData}
                                    name="imageId"
                                    required
                                    singleSelect
                                    validate={{
                                        required: true
                                    }}
                                />
                            </FormLayoutItem>
                        </GridLayoutRow>
                    </GridLayout>
                    <FormLayoutItem>
                        <Field
                            component={Textarea}
                            name="description"
                            label="!!!Описание"
                            required
                            validate={{
                                required: true,
                                length: {
                                    max: 250
                                }
                            }}
                            placeholder="Описание"
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Dropdown}
                            name="position"
                            items={positionDropDownItems}
                            label="!!!должность"
                            required
                            disabled
                            value={positionDropDownValue}
                            validate={{
                                required: true
                            }}
                            placeholder="должность"
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="instagramUrl"
                            label="!!!Instagram"
                            placeholder="Instagram url"
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="facebookUrl"
                            label="!!!Facebook"
                            placeholder="Facebook url"
                        />
                    </FormLayoutItem>
                </FormLayoutItemGroup>
            </FormLayout>
        </Form>
    );
};

export {AddStaffModalForm};
