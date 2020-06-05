import React from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentsListItem} from './DepartmentsListItem';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {PendingCloak} from '../../../../baseComponents/PendingCloak/PendingCloak';

const DepartmentsListContent = (
    {
        pending,
        departmentsList
    }
) => {
    const hasDepartments = departmentsList.length !== 0;

    return (
        <>
            {
                pending && (
                    <PendingCloak/>
                )
            }
            {
                !pending && (
                    <ContentLayout>
                        {
                            hasDepartments && (
                                <>
                                    {
                                        departmentsList.map(item => {
                                            return (
                                                <DepartmentsListItem
                                                    key={item._id}
                                                    departmentItem={item}
                                                />
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                        {
                            !hasDepartments && (
                                <EmptyContent>
                                    !!Добавьте филиал
                                </EmptyContent>
                            )
                        }
                    </ContentLayout>
                )
            }
        </>
    );
};

export {DepartmentsListContent};
