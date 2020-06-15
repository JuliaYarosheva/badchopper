import React from 'react';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';
import classes from './styles/index.module.scss';

const MediaSelectorItem = (
    {
        item,
        handleDeleteProcessedImage
    }
) => {
    return (
        <div className={classes.mediaSelectorItem}>
            <div onClick={() => handleDeleteProcessedImage(item._id)}>
                <Icon
                    icon={deleteCircleOutline}
                    className={classes.mediaSelectorItem__deleteIcon}
                />
            </div>
            <img src={`http://localhost:4040/${item.path}`} alt={item.name}/>
        </div>
    );
};

export {MediaSelectorItem};
