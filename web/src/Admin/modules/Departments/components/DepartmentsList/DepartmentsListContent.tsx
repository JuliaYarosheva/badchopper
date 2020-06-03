import React from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentsListItem} from './DepartmentsListItem';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';

const DepartmentsListContent = (
    {
        departmentsData
    }
) => {
    const hasDepartments = departmentsData.length !== 0;

    return (
        <ContentLayout>
            {
                hasDepartments && (
                    <>
                        {
                            departmentsData.map(item => {
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
    );
};

export {DepartmentsListContent};
