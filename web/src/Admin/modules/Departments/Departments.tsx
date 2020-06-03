import React from 'react';
import {Route} from "react-router-dom";

import {DepartmentsModalsProvider} from './components/DepartmentsModalsProvider/DepartmentsModalsProvider';
import {DepartmentsDetail} from './components/DepartmentsDetail/DepartmentsDetail';
import {DepartmentsList} from './components/DepartmentsList/DepartmentsList';
import {ROUTES} from '../../contst';

const Departments = () => {
    return (
        <DepartmentsModalsProvider>
            <Route path={ROUTES.DEPARTMENTS_LIST}>
                <DepartmentsList/>
            </Route>
            <Route path={ROUTES.DEPARTMENTS_DETAIL}>
                <DepartmentsDetail/>
            </Route>
        </DepartmentsModalsProvider>
    );
};

export {Departments};
