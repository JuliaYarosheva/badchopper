import React from 'react';
import {DepartmentAddHeader} from './DepartmentAddHeader';
import {DepartmentAddContent} from './DepartmentAddContent';
import {DepartmentAddFooter} from './DepartmentAddFooter';

const DepartmentAdd = () => {
    return (
        <>
            <DepartmentAddHeader/>
            <DepartmentAddContent/>
            <DepartmentAddFooter/>
        </>
    );
};

export {DepartmentAdd};
