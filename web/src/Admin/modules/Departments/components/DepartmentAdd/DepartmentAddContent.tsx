import React, {useContext, useState, useRef} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentAddForm} from './DepartmentAddForm';
import {addDepartmentHook} from './hooks';
import {NavigationContext} from '../../../../adminComponents/Navigation/store';
import {getNavigationList} from '../../../../adminComponents/Navigation/api';
import {isNull} from '../../../../../utils';

const DepartmentAddContent = () => {
    const {setNavigationList} = useContext(NavigationContext);
    const mediaIdRef = useRef(null);
    const [selectedMediaId, setSelectedMediaId] = useState(null);
    const [hasSelectedMedia, setHasSelectedMedia] = useState(true);

    const onAddDepartmentSuccess = () => {
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
                handleDeleteImage();
            });
    };

    const handleSelectMedia = (id) => {
        mediaIdRef.current = id[0];
        setSelectedMediaId(id[0]);
        setHasSelectedMedia(true);
    };

    const handleDeleteImage = () => {
        mediaIdRef.current = null;
        setSelectedMediaId(null);
        setHasSelectedMedia(true);
    };

    const handleAddDepartment = (values, resetFormValues) => {
        if (isNull(mediaIdRef.current)) {
            setHasSelectedMedia(false);

            return;
        }

        addDepartmentHook(values, onAddDepartmentSuccess);
        resetFormValues();
    };

    return (
        <ContentLayout>
            <DepartmentAddForm
                selectedMediaId={selectedMediaId}
                hasSelectedMedia={hasSelectedMedia}
                handleDeleteImage={handleDeleteImage}
                handleSelectMedia={handleSelectMedia}
                handleAddDepartment={handleAddDepartment}
            />
        </ContentLayout>
    );
};

export {DepartmentAddContent};
