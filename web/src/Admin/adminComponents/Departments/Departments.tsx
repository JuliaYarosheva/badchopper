import React from 'react';

import {DepartmentsDetail} from './components/DepartmentsDetail/DepartmentsDetail';
import {DepartmentsHeader} from './components/DepartmentsHeader/DepartmentsHeader';
import {DepartmentsModalsProvider} from './components/DepartmentsModalsProvider/DepartmentsModalsProvider';

const Departments = () => {
    return (
        <DepartmentsModalsProvider>
            <DepartmentsHeader/>
            <DepartmentsDetail/>
        </DepartmentsModalsProvider>
    );
};

export {Departments};
