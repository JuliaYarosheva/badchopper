import React, {useContext, useEffect} from 'react';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {AssistanceContext} from '../../store';
import {getAllAssistance, deleteAssistance} from '../../api';
import {AssistanceListItem} from './AssistanceListItem';
import {getUniqueId, getUniqueKey} from '../../../../../utils';
import {AssistanceModalsContext, MODALS} from '../AssistanceModalsProvider/const';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';

const AssistanceList = () => {
    const {assistance, setAssistance, removeOneAssistance} = useContext(AssistanceContext);
    const {openModal} = useContext(AssistanceModalsContext);
    const {showNotification} = useContext(AdminAppContext);

    useEffect(() => {
        getAllAssistance()
            .then(({data}) => setAssistance(data))
        // eslint-disable-next-line
    }, []);

    const handleItemDelete = (id, itemName) => {
        return deleteAssistance(id)
            .then(() => {
                removeOneAssistance(id);

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `!! Услуга "${itemName}" удалена`
                    })
                }
            })
    };

    const handleItemClick = (id) => {
        const selectedItem = assistance.find(item => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.ASSISTANCE_DETAIL_MODAL,
                selectedItem
            );
        }
    };

    const handleOpenItemDeleteModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = assistance.find((item) => id === item._id);

        if (!!openModal && typeof selectedItem !== 'undefined') {
            openModal(
                MODALS.DELETE_ASSISTANCE_MODAL,
                {
                    modalTitle: '!!Удалить услугу',
                    rightButtonLabel: '!!Удалить',
                    handleSubmit: () => handleItemDelete(id, selectedItem.name),
                    content: `!!Вы уверены, что хотите удалить услугу "${selectedItem.name}"?`
                }
            );
        }
    };

    const hasAssistance = assistance.length !== 0;
    return (
        <ContentLayout>
            <>
                {
                    hasAssistance && assistance.map(item => {
                        return (
                            <AssistanceListItem
                                key={getUniqueKey()}
                                item={item}
                                handleItemClick={handleItemClick}
                                handleOpenItemDeleteModal={handleOpenItemDeleteModal}
                            />
                        )
                    })
                }
                {
                    !hasAssistance && (
                        <EmptyContent>
                            !!Добавьте услуги
                        </EmptyContent>
                    )
                }
            </>
        </ContentLayout>
    );
};

export {AssistanceList};
