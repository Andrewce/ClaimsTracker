import React, { useState, createContext } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    const [users, setUser] = useState(
        {
            userName: '',
            initials: 'NO USER',
            password: ''
        }

    )
    return (
        <UserContext.Provider value={[users, setUser]}>
            {props.children}
        </UserContext.Provider >
    );
}