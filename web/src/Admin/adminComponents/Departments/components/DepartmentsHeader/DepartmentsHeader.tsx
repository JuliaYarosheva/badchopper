import React, { useContext } from 'react';
import {ContentHeaderLeft, ContentHeaderRight} from '../../../ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import ContentHeader from '../../../ContentHeader';
import {Button} from '../../../../baseComponents/Button/Button';
import classes from './styles/index.module.scss';
import {DepartmentsModalsContext, MODALS} from '../../consts';


const DepartmentsHeader = () => {

    const { openModal } = useContext(DepartmentsModalsContext);

    const actionButtonHandler = () => {
        if (!!openModal) {
            openModal(MODALS.ADD_DEPARTMENT_MODAL);
        }
    };

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    !!Филиалы
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    type="primary"
                    transparent
                    label="!!Добавить филиал"
                    className={classes.departmentHeader__actionButton}
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

export {DepartmentsHeader};
