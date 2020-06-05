import React, {useContext} from 'react';
import {ContentFooter} from '../../../../adminComponents/ContentFooter/ContentFooter';
import {Button} from '../../../../baseComponents/Button/Button';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';

const DepartmentAddFooter = () => {
    const { forms } = useContext(AdminAppFormContext);

    return (
        <ContentFooter>
            <Button
                actionHandler={() => forms.ADD_DEPARTMENT_FORM.submitForm()}
                label="!!Добавить филиал"
                type="primary"
            />
        </ContentFooter>
    );
};

export {DepartmentAddFooter};
