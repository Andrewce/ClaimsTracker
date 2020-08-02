import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Redirect } from 'react-router-dom'
import { UserContext } from './UserContext'



export default function Header() {

    const [users, setUser] = useContext(UserContext)
    console.log("initials user is", users)

    const logoutUser = () => {
        setUser({
            userName: '',
            initials: '',
            password: ''

        })
    }

    return (
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4 center">
                        Hi {users.user}

                    </h5>
                    <h5 className="text-white h4 center">
                        More profile info goes here
                    </h5>
                    <Link to={!users ? "/404" : "/"}>
                        <span className="text-muted">{users.user ? (<h1 onClick={logoutUser}><button className="btn btn-primary" >Log Out </button></h1>) : (

                            <h1 onClick={<Redirect to="/Main" />}> You are not logged in </h1>)}

                        </span>
                    </Link>

                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="d-flex ">
                    <div className=" Header-User" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" >

                        {users.initials}

                    </div>

                    <Link to="/">
                        <div className="text-light h2 ml-3">Claims Tracker </div>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>

    )
}
