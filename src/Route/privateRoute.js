import AdminPage from '../components/AdminPage'
import Maneger from '../components/Maneger'
import Worker from '../components/Worker'
import Seller from '../components/Seller'
import Payment from '../components/Payment'
import {Navigate} from 'react-router-dom'
import {getPath} from './utils'


export const privateRoute = [
    {
        path: '/dashborad',
        element: <Navigate replace to ={getPath()}/>,
        role: 'all'
    },
    {
        path: 'maneger',
        element: <Maneger />,
        role: 'maneger'
    },
    {
        path: 'admin',
        element: <AdminPage />,
        role: 'admin'
    },
    {
        path: 'payment',
        element: <Payment />,
        role: 'admin'
    },
    {
        path: 'worker',
        element: <Worker />,
        role: 'worker'
    }, {
        path: 'seller',
        element: <Seller />,
        role: 'seller'
    }
]