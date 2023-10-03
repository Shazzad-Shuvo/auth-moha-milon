import PropTypes from 'prop-types';
import { createContext } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo = {name: 'Shazzad Shuvo'};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}



/**
 * 1. Create Context & export it
 * 2. Set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4.access children in the <AuthProvider> component as children and use it inside <AuthContext.Provider>
 */