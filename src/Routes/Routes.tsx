import { BrowserRouter, Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { HOME, TRIP } from '../Constants/routes';

import { Home } from '../Pages/Home';
import { Trip } from '../Pages/Trip';

export const Routes = () => {
    return (
        <BrowserRouter>
            <ReactRouterRoutes>
                <Route element={<Home />} path={HOME} />
                <Route element={<Trip />} path={TRIP} />
            </ReactRouterRoutes>
        </BrowserRouter>
    );
};
