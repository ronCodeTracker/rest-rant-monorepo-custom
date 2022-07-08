import { useState, useEffect, useContext, createContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

export const CurrentUserBool = createContext()

function Navigation() {

    const history = useHistory()

    const [currentUserBool, setCurrentUserBool] = useState(false)

    //const [currentUser2, setCurrentUser2] = useState(" ")
    //const currentUser3 = {}
    const { currentUser } = useContext(CurrentUser)

    //setCurrentUser2({ currentUser })

    let currentUser2 = currentUser

    function functOne (){
        console.log("luvvvv")
        currentUser2 = null
        //setCurrentUserBool(true)
    }

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser2) {
        console.log(currentUser2)
        loginActions = (
            <span>

                <li style={{ float: 'right' }}>
                    Logged in as {currentUser2.firstName} {currentUser2.lastName}
                </li>
                {/*<input type="button" style={{ color: 'black' , display: 'inline', fontSize: '3.5vw'}} onClick={onclickOne()}>*/}
                {/*    Log out*/}
                {/*</input>*/}
                <input type="button" onClick={functOne()}></input>

            </span>
            
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;