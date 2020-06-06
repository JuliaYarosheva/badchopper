import React, {useContext, useEffect, useState, useMemo} from 'react';
import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {DepartmentsModalsContext, MODALS} from '../DepartmentsModalsProvider/const';
import {DepartmentAddMediaButton} from './DepartmentAddMediaButton';
import {getAllImages} from '../../../Media/api';
import {MediaImagesType} from '../../../Media/store/types';
import {isNullOrUndefined} from '../../../../../utils';
import {DepartmentAddSelectedMedia} from './DepartmentAddSelectedMedia';

const DepartmentAddFormMedia = (
    {
        selectedMediaId,
        handleSelectMedia,
        handleDeleteImage,
        hasSelectedMedia
    }
) => {
    const {openModal} = useContext(DepartmentsModalsContext);
    const [mediaData, setMediaData] = useState<MediaImagesType>([]);

    useEffect(() => {
        if (typeof getAllImages === 'undefined') return;

        getAllImages()
            .then(({data}) => setMediaData(data))
    }, []);

    const handleOpenMediaModal = () => {
        if (typeof openModal === 'undefined') return;

        openModal(
            MODALS.MEDIA_SELECT_MODAL,
            {
                modalTitle: '!!Выберите одно изображение',
                rightButtonLabel: '!!Выбрать',
                handleSubmit: handleSelectMedia,
                mediaData,
                singleSelect: true
            }
        )
    };

    const selectedMedia = useMemo(() => {
        if (!hasSelectedMedia) return;

        return mediaData.find(item => item._id === selectedMediaId)
    }, [selectedMediaId, mediaData, hasSelectedMedia]);

    return (
       <>
           <PaddingBox hrSmall>
               <Typography bold='600' variant='18'>
                   !!Медиа
               </Typography>
           </PaddingBox>
           <PaddingBox small>
               {
                   !isNullOrUndefined(selectedMedia) && (
                       <DepartmentAddSelectedMedia
                           selectedMedia={selectedMedia}
                           handleDeleteImage={handleDeleteImage}
                       />
                   )
               }
               {
                   isNullOrUndefined(selectedMedia) && (

                           <DepartmentAddMediaButton
                               handleClick={handleOpenMediaModal}
                               hasSelectedMedia={hasSelectedMedia}
                           />

                   )
               }
           </PaddingBox>
       </>
    );
};

export {DepartmentAddFormMedia};
