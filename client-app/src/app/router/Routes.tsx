import {createBrowserRouter, RouteObject} from 'react-router-dom'
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import ActivityDetails from '../../features/Activities/Details/ActivityDetails';
import ActivityForm from '../../features/Activities/Form/ActivityForm';
import App from '../layout/App';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key="create"/>},
            {path: 'manage/:id', element: <ActivityForm key="manage" />},
        ]
    }
]

export const router = createBrowserRouter(routes);