import { useRoutes } from 'react-router-dom'

const Router = ({ allRoute }) => {
    const route = useRoutes([...allRoute]);
    return route
}

export default Router