import React, {FC} from 'react';
import Modal from '../../../../baseComponents/Modal';
import {AddStaffModalContent} from './AddStaffModalContent';
import {ModalType} from '../../../../../types';

const AddStaffModal: FC<ModalType> = (
    {
        isOpen,
        modalData,
        handleClose
    }
) => {
    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleClose}
            render={renderData => {
                return (
                    <AddStaffModalContent
                        {...renderData}
                        modalData={modalData}
                    />
                );
            }}
        />
    );
};

export {AddStaffModal};
