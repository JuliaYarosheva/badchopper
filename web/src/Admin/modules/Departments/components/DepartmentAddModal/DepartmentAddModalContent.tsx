import React, { useContext } from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';
import {DepartmentAddModalForm} from './DepartmentAddModalForm';
import {addDepartment} from '../../api';
import {getNavigationList} from '../../../../adminComponents/Navigation/api';
import {NavigationContext} from '../../../../adminComponents/Navigation/store';

const DepartmentAddModalContent = (
    {
        handleClose
    }
) => {
    const {setNavigationList} = useContext(NavigationContext);
    const { forms } = useContext(AdminAppFormContext);

    const handleAddDepartment = (values) => {
        const {
            city,
            street,
            number,
            latitude,
            longitude,
            ...rest
        } = values;

        const requestData = {
            ...rest,
            address: {
                street: values.street,
                city: values.city,
                number: values.number
            },
            location: {
                latitude: values.latitude,
                longitude: values.longitude
            }
        };

        addDepartment(requestData)
            .then(() => onAddDepartmentSuccess())
    };

    const onAddDepartmentSuccess = () => {
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
                handleClose();
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
            <ModalContent extraHeight>
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
