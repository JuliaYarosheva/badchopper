import React, {useContext} from 'react';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';
import {AssistanceContext} from '../../../Assistance/store';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {addAssistance} from '../../../Assistance/api';
import {getUniqueId} from '../../../../../utils';
import {Button} from '../../../../baseComponents/Button/Button';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import Form, {Field} from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Textarea, Textbox} from '../../../../baseComponents/Form/Adapters';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';

const AddStaffModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {isBarberLayout} = modalData;
    const {forms} = useContext(AdminAppFormContext);
    const {setAssistance} = useContext(AssistanceContext);
    const {showNotification} = useContext(AdminAppContext);

    const handleAddAssistance = (values) => {
        addAssistance(values)
            .then(({data}) => {
                setAssistance(data);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: '!! Услуга добавлена'
                    })
                }
            })
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="!!Закрыть"
            transparent
        />
    );

    const rightButtons = (
        <Button
            actionHandler={() => forms.ADD_STAFF_FORM.submitForm()}
            label="!!Добавить"
            type="primary"
        />
    );

    const modalLabel = isBarberLayout ? "!!Добавить мастера" : "!!Добавить менеджера";

    return (
        <>
            <ModalHeader
                label={modalLabel}
                handleClose={handleClose}
            />
            <ModalContent>
                <Form
                    onSubmit={handleAddAssistance}
                    name={FORMS.ADD_STAFF_FORM}
                >
                    <FormLayout>
                        <FormLayoutItemGroup>
                            <FormLayoutItem>
                                <Field
                                    component={Textbox}
                                    name="name"
                                    label="!!!название услуги"
                                    required
                                    validate={{
                                        required: true
                                    }}
                                    placeholder="название услуги"
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
                                    placeholder="Описание"
                                />
                            </FormLayoutItem>
                            <FormLayoutItemGroup
                                inline
                                grid="4-8"
                                singleItem
                            >
                                <FormLayoutItem>
                                    <Field
                                        component={Textbox}
                                        name="price"
                                        label="!!!Стоимость"
                                        required
                                        validate={{
                                            required: true
                                        }}
                                        placeholder="00.00"
                                    />
                                </FormLayoutItem>
                            </FormLayoutItemGroup>
                        </FormLayoutItemGroup>
                    </FormLayout>
                </Form>
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={leftButtons}
                    rightButtons={rightButtons}
                />
            </ModalFooter>
        </>
    );
};

export {AddStaffModalContent};
