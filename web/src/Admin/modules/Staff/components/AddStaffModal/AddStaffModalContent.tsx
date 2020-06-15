import React, {useContext, useState, useEffect} from 'react';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';
import {Button} from '../../../../baseComponents/Button/Button';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {getAllImages} from '../../../Media/api';
import {addStaff} from '../../api';
import {StaffContext} from '../../store';
import {AddStaffModalForm} from './AddStaffModalForm';

const AddStaffModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {isBarberLayout} = modalData;
    const {forms} = useContext(AdminAppFormContext);
    const {setAllStaff} = useContext(StaffContext);
    const {showNotification} = useContext(AdminAppContext);
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        getAllImages()
            .then(({data}) => setMediaData(data))
        // eslint-disable-next-line
    }, []);

    const handleAddStaff = (values) => {

        addStaff(values)
            .then(({data}) => {
                setAllStaff(data);
                handleClose();

                const notificationMessage = isBarberLayout
                    ? `!!Мастера ${data[0].name} ${data[0].surname} добавлен`
                    : `!!Мастера ${data[0].name} ${data[0].surname} добавлен`;

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: notificationMessage
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

    const mediaModalData = {
        modalTitle: "!!Медиа файлы",
        rightButtonLabel: "!!Выбрать",
        mediaData,
        singleSelect: true
    };

    const positionDropDownValue = isBarberLayout ? 1 : 2;

    return (
        <>
            <ModalHeader
                label={modalLabel}
                handleClose={handleClose}
            />
            <ModalContent>
               <AddStaffModalForm
                   handleAddStaff={handleAddStaff}
                   mediaModalData={mediaModalData}
                   positionDropDownValue={positionDropDownValue}
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

export {AddStaffModalContent};
