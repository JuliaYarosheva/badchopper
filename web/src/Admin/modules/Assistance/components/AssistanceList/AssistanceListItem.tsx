import React from 'react';

import classes from './styles/index.module.scss';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';

const AssistanceListItem = (
    {
        item,
        handleItemClick,
        handleOpenItemDeleteModal,
    }
) => {
    return (
        <div onClick={() => handleItemClick(item._id)}>
			<GridLayout>
				<GridLayoutRow
                    alignItems="center"
					grid="3-6-2-1"
					className={classes.assistanceListItem}
				>
					<div>{item.name}</div>
					<div>{item.description}</div>
					<div>{item.price}</div>
                    <div
                        className={classes.assistanceListItem__deleteIconWrapper}
                        onClick={e => handleOpenItemDeleteModal(e, item._id)}
                    >
                        <Icon
                            className={classes.assistanceListItem__deleteIcon}
                            icon={deleteCircleOutline}
                        />
                    </div>
				</GridLayoutRow>
			</GridLayout>
        </div>
    );
};

export {AssistanceListItem};
