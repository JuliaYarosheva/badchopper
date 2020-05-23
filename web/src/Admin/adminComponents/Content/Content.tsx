import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import {ROUTES} from '../../contst';
import {Assistance} from '../Assistance/Assistance';
import {Feedbacks} from '../Feedbacks/Feedbacks';
import {Departments} from '../Departments/Departments';
import classes from './styles/index.module.scss'

const Content = () => {
    return (
        <div className={classes.content}>
			<Switch>
				<Route path={ROUTES.ASSISTANCE}>
					<Assistance/>
				</Route>
				<Route path={ROUTES.FEEDBACKS}>
					<Feedbacks/>
				</Route>
                <Route path={ROUTES.DEPARTMENTS}>
                    <Departments/>
                </Route>
			</Switch>
        </div>
    );
};

export {Content};