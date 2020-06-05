import React, { useState } from 'react';

import { DepartmentsModalsContext } from './const';

export const DepartmentsModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});

	const modalState = {
		//[MODALS.ADD_DEPARTMENT_MODAL]: setIsAddDepartmentModalOpen,
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

		</>
	);
};
