import React, { useState } from 'react';

import { MODALS, StaffModalsContext } from './const';
import {NotificationModal} from '../../../../baseComponents/NotificationModal/NotificationModal';
import {AddStaffModal} from '../AddStaffModal/AddStaffModal';

export const StaffModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isDeleteStaffModalOpen, setIsDeleteStaffModalOpen] = useState(false);
	const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);

	const modalState = {
		[MODALS.DELETE_STAFF_MODAL]: setIsDeleteStaffModalOpen,
		[MODALS.ADD_STAFF_MODAL]: setIsAddStaffModalOpen,
	};

	const openModal = (modalName, data) => {
		modalState[modalName](true);

		if (data) setModalData(data);
	};

	const closeModal = (modalName) => {
		modalState[modalName](false);

		if (modalData) setModalData({});
	};

	const modalProviderActions = {
		openModal,
		closeModal
	};

	return (
		<>
			<StaffModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</StaffModalsContext.Provider>
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteStaffModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_STAFF_MODAL)}
            />
            <AddStaffModal
                modalData={modalData}
                isOpen={isAddStaffModalOpen}
                handleClose={() => closeModal(MODALS.ADD_STAFF_MODAL)}
            />
		</>
	);
};
