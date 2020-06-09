import React, {useEffect, useMemo, useState} from 'react';
import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {getAllImages} from '../../../Media/api';
import {MediaImagesType} from '../../../Media/store/types';
import {DepartmentAddMedia} from './DepartmentAddMedia';

const DepartmentAddFormMedia = (
    {
        selectedMediaId,
        handleSelectMedia,
        handleDeleteImage,
        hasSelectedMedia,
        hasInitialValues
    }
) => {
    const [mediaData, setMediaData] = useState<MediaImagesType>([]);

    useEffect(() => {
        if (typeof getAllImages === 'undefined') return;

        getAllImages()
            .then(({data}) => setMediaData(data))
    }, []);

    const selectedMedia = useMemo(() => {
        return mediaData.find(item => item._id === selectedMediaId)
    }, [selectedMediaId, mediaData]);

    return (
       <>
           <PaddingBox hrSmall>
               <Typography bold='600' variant='18'>
                   !!Медиа
               </Typography>
           </PaddingBox>
           <PaddingBox small>
               <DepartmentAddMedia
                   singleSelect
                   mediaData={mediaData}
                   showDeleteButton={!hasInitialValues}
                   hasSelectedMedia={hasSelectedMedia}
                   selectedMedia={[selectedMedia]}
                   handleSelectMedia={handleSelectMedia}
                   handleDeleteImage={handleDeleteImage}
               />
           </PaddingBox>
       </>
    );
};

export {DepartmentAddFormMedia};
