import React from 'react';

import {Navigation} from '../Navigation/Navigation';
import {Content} from '../Content/Content';

const AdminApp = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Navigation />
            <Content />
        </div>
    );
};

export { AdminApp };


