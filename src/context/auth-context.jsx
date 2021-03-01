import React from 'react';

//globally available javascript object
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;