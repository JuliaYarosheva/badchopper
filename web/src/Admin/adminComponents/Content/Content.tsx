import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import {ROUTES} from '../../contst';
import {Assistance} from '../Assistance/Assistance';
import {Feedbacks} from '../Feedbacks/Feedbacks';

const Content = () => {
    return (
        <div style={{ marginLeft: 230 }}>
			<Switch>
				<Route path={ROUTES.ASSISTANCE}>
					<Assistance/>
				</Route>
				<Route path={ROUTES.FEEDBACKS}>
					<Feedbacks/>
				</Route>
			</Switch>
        </div>
    );
};

export {Content};
