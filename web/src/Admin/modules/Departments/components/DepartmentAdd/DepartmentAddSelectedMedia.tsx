import React from 'react';

import classes from './styles/index.module.scss';
import {Icon} from '@iconify/react';
import deleteCircleOutline from '@iconify/icons-mdi/delete-circle-outline';

const DepartmentAddSelectedMedia = (
    {
        selectedMedia,
        handleDeleteImage
    }
) => {
    return (
        <div className={classes.departmentAddSelectedMedia}>
            <div onClick={handleDeleteImage}>
                <Icon
                    icon={deleteCircleOutline}
                    className={classes.departmentAddSelectedMedia__deleteIcon}
                />
            </div>
            <img src={`http://localhost:4040/${selectedMedia.path}`} alt={selectedMedia.name}/>
        </div>
    );
};

export {DepartmentAddSelectedMedia};
