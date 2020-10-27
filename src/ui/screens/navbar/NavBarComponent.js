import React from 'react'
import { SCREENS } from '../../../common/Constants'
import './styles/navbar.css'

function NavBarComponent() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark ">
        
        <a className="navbar-brand" href="#">KAAYLABS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>        
        <div className=" justify-content-end collapse navbar-collapse" id="navbarNav">
          
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href={SCREENS.HOME}>Home</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBarComponent
