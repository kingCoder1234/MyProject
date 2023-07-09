import { Navigate } from 'react-router-dom';
import { getLoggedInUser } from '../utils'

const PrivateRoute = ({ children }) => {
    const user = getLoggedInUser()
    if (!user) {
        return <Navigate to="/login" replace={true} />
    }
    if (!user.isAdmin) {
        return <Navigate to="/notfound" replace={true} />
    }
    return (<> {children}</>)
}

export default PrivateRoute