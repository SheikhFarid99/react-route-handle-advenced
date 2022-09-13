import Home from '../components/Home';
import NotAccess from '../components/NotAccess';
import Error from '../components/Error'

export const publicRoute = [
    {
        path: '',
        element: <Home />,
        children : [
            {
                path : '/',
                element : <Error/>
            },
            {
                path : '/ha',
                element : <NotAccess/>
            }
        ]
    },
    {
        path: '/not-access',
        element: <NotAccess />
    },
    {
        path: '*',
        element: <Error />
    }
]