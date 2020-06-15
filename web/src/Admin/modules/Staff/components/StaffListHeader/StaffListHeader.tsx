import React, { useContext } from 'react';
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import {StaffModalsContext, MODALS} from '../StaffModalsProvider/const';

const StaffListHeader = (
    {
        headerLabel,
        isBarberLayout,
        isManagerLayout
    }
) => {
    const { openModal } = useContext(StaffModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(
                MODALS.ADD_STAFF_MODAL,
                {
                    isBarberLayout
                }
            );
        }
    };

    const addButtonLabel = isBarberLayout ? "!!Добавить мастера" : "!!Добавить менеджера";

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    {headerLabel}
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    type="primary"
                    transparent
                    label={addButtonLabel}
                    floatRight
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

StaffListHeader.defaultProps = {
    isBarberLayout: false,
    isManagerLayout: false,
};

export {StaffListHeader};
