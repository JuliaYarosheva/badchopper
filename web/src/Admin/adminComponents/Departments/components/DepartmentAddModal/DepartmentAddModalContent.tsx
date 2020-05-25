import React, { useContext } from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {AdminAppFormContext} from '../../../AdminApp/store/AdminAppFormContext/consts';
import {DepartmentAddModalForm} from './DepartmentAddModalForm';

const DepartmentAddModalContent = (
    {
        handleClose
    }
) => {
    const { forms } = useContext(AdminAppFormContext);

    const handleAddDepartment = (values) => {
        console.log(values);
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
            actionHandler={() => forms.ADD_DEPARTMENT_FORM.submitForm()}
            label="!!Добавить"
            type="primary"
        />
    );

    return (
        <>
            <ModalHeader
                label="Новый филиал"
                handleClose={handleClose}
            />
            <ModalContent>
               <DepartmentAddModalForm
                   handleAddDepartment={handleAddDepartment}
               />
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

export {DepartmentAddModalContent};
