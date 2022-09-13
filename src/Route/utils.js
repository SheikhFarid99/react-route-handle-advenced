export const user = {
    name: 'Sheikh Farid',
    role: 'worker'
}

const routes = [
    {
        path: '/dashborad/admin',
        role: 'admin'
    },
    {
        path: '/dashborad/maneger',
        role: 'maneger'
    },
    {
        path: '/dashborad/seller',
        role: 'seller'
    },
    {
        path: '/dashborad/worker',
        role: 'worker'
    }
]

export const getPath = () => {
    const route = routes.find(r => r.role === user.role);
    return route.path
}