import React, {useState} from 'react';
import {MediaSelectModal} from './MediaSelectModal';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';
import plusIcon from '@iconify/icons-mdi/plus';
import {Icon} from '@iconify/react';
import ClassNames from 'classnames';
import {MediaSelectorItem} from './MediaSelectorItem';
import {getUniqueKey, removeArrayElementByValue} from '../../../utils';

const MediaSelector = (
    {
        mediaModalData,
        onFieldChange,
        singleSelect,
        required,
        isValid,
        value
    }
) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState([]);

    const getMediaValue = (values) => {
        return singleSelect ? values[0] : values;
    };

    const handleSubmit = (values) => {
        onFieldChange(getMediaValue(values));
        setSelectedMedia(values);
    };

    const handleDeleteProcessedImage = (id) => {
        const mutateSelectedMedia = removeArrayElementByValue(selectedMedia, id);

        const mediaValues = mutateSelectedMedia.length === 0 ? null : getMediaValue(mutateSelectedMedia);

        onFieldChange(mediaValues);
        setSelectedMedia(mutateSelectedMedia);
    };

    const componentClassName = ClassNames(
        {
            [classes.mediaSelector__noSelectedMedia]: !isValid
        },
        classes.mediaSelector
    );

    const showButton = singleSelect && value;

    return (
        <>
            {
                !showButton && (
                    <div
                        className={componentClassName}
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <Icon
                            icon={plusIcon}
                        />
                    </div>
                )
            }
            {
                showButton && selectedMedia.length !== 0 && selectedMedia.map(item => {
                    const currentItem = mediaModalData.mediaData.find(mediaDataItem => item === mediaDataItem._id);

                    return (
                        <MediaSelectorItem
                            key={getUniqueKey()}
                            item={currentItem}
                            handleDeleteProcessedImage={handleDeleteProcessedImage}
                        />
                    )
                })
            }
            <MediaSelectModal
                isOpen={modalOpen}
                modalData={{...mediaModalData, handleSubmit}}
                handleClose={() => setModalOpen(!modalOpen)}
            />
        </>

    );
};

MediaSelector.defaultProps = {
    singleSelect: false
};

MediaSelector.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    singleSelect: PropTypes.bool,
    onFieldChange: PropTypes.func,
};

export {MediaSelector};
