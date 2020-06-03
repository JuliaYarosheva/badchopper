import React, { useState } from 'react';

import { MODALS, DepartmentsModalsContext } from '../../consts';
import {DepartmentAddModal} from '../DepartmentAddModal/DepartmentAddModal';

export const DepartmentsModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isIsAddDepartmentModalOpen, setIsAddDepartmentModalOpen] = useState(false);

	const modalState = {
		[MODALS.ADD_DEPARTMENT_MODAL]: setIsAddDepartmentModalOpen,
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
			<DepartmentsModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</DepartmentsModalsContext.Provider>
            <DepartmentAddModal
                modalData={modalData}
                isOpen={isIsAddDepartmentModalOpen}
                handleClose={() => closeModal(MODALS.ADD_DEPARTMENT_MODAL)}
            />
		</>
	);
};
