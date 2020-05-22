import React, { useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import className from 'classnames';
import classes from './styles/index.module.scss';
import { AdminAppContext } from '../../AdminComponents/AdminApp/store/AdminAppContext';


const Modal = (
	{
		size,
		render,
		isOpen,
		handleClose
	}
) => {
    //@ts-ignore
	const { handleShowOverlayCloak, setHandleOverlayClose } = useContext(AdminAppContext);

	useEffect(() => {
		if (isOpen) {
			setHandleOverlayClose(() => handleClose);
		} else {
			setHandleOverlayClose(() => {});
		}

		handleShowOverlayCloak(isOpen);
	}, [isOpen]);

	const componentClassName = className(
		classes.modal,
		{
			[classes.modal_small]: size === 'small',
			[classes.modal_medium]: size === 'medium',
			[classes.modal_large]: size === 'large'
		}
	);

	return (
		<CSSTransition
			in={isOpen}
			unmountOnExit
			timeout={500}
			classNames={{
				enter: classes['modal-enter'],
				enterActive: classes['modal-enter-active'],
				exit: classes['modal-exit'],
				exitActive: classes['modal-exit-active']
			}}
		>
			<div className={componentClassName}>
				{ render({ handleClose }) }
			</div>
		</CSSTransition>
	);
};

Modal.defaultProps = {
	isOpen: false,
	size: 'medium',
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
	render: PropTypes.func,
	size: PropTypes.string,
	handleClose: PropTypes.func,
};

export { Modal };
