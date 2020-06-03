import React, { FC } from 'react';

import Modal from '../../../../baseComponents/Modal';
import {ModalComponentType} from '../../../../baseComponents/Modal/types';
import {DepartmentAddModalContent} from './DepartmentAddModalContent';

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
            extraHeight
			isOpen={isOpen}
			handleClose={handleClose}
			render={renderData => {
				return (
					<DepartmentAddModalContent
                        {...renderData}
                    />
				);
			}}
		/>
	);
};

export { DepartmentAddModal };
