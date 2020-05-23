import React, { FC } from 'react';

import Modal from '../../../../baseComponents/Modal';
import {ModalComponentType} from '../../../../baseComponents/Modal/types';

//import ManufacturesDetailModalContent from './ManufacturesDetailModalContent';

const DepartmentAddModal: FC<ModalComponentType> = (
	{
		isOpen,
		modalData,
		handleClose
	}
) => {
	return (
		<Modal
			size="large"
			isOpen={isOpen}
			handleClose={handleClose}
			render={renderData => {
				return (
					<div>conten</div>
				);
			}}
		/>
	);
};

export { DepartmentAddModal };
