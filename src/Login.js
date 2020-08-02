import React, { useState, useContext } from 'react'
import './App.css';
import { UserContext } from './UserContext'
import { Link, Redirect } from 'react-router-dom';

export default function Login() {

    const [users, setUser] = useContext(UserContext)

    console.log('initials users', users)
    // 1. updates state - user, ser User
    const testUser = [
        { user: 'Malini', password: '123123', initials: 'MV' },
        { user: 'Andrei', password: '123456', initials: 'AL' },
        { user: 'Talen', password: '112233', initials: 'TS' }
    ]

    const [userInput, setUserInput] = useState('')
    const [userPassword, setUserpassword] = useState('initislStat')

    // 2. 'user/pass Validation if pass ===pass { set user [user, initialls ...userinfo]}

    // 3. set the Context to the new user

    // 4. -> Link to Main

    const UpdateUser = (e) => {
        setUserInput(e.target.value)
    }
    const UpdatetPassword = (e) => {
        setUserpassword(e.target.value)
        console.log("the user pass is ", userPassword)
    }

    const userValidation = () => {
        let fUser = [...testUser]
        console.log("the funct user is ", fUser)
        for (let i = 0; i < fUser.length; i++) {
            if (userInput === fUser[i].user && userPassword === fUser[i].password) {
                setUser(fUser[i])
            }
            console.log("not a match")
        }
    }

    return (
        <div className="login">
            <div className="login-items">
                {users.user ? (<Redirect to="/Main" />)
                    : (
                        <div className="">
                            <input type="text" className="form-control" placeholder="Username" required="required" onChange={UpdateUser} />
                            <input type="password" className="form-control" placeholder="Password" required="required" onChange={UpdatetPassword} />
                        </div>
                    )}
                <Link >
                    <button onClick={userValidation} type="submit" className="btn btn-primary btn-block">{users.user ? "Log off" : "Log in"}  </button>
                </Link>
            </div>
        </div>
    )
}
