import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentLoggedinUser, fetchUserById, UserlogOut } from '../../utils'
import cogoToast from 'cogo-toast';

export default function Usernavbar() {
    const navigate = useNavigate()
    function RedirectToHome() {
        UserlogOut()
        cogoToast.success('Logout Successfully')
        navigate("/");
    }
    const user = (getCurrentLoggedinUser === " " ? fetchUserById(getCurrentLoggedinUser()) : " ")
    return (
        <div style={{ position: "sticky", top: "0px", zIndex: "1" }} className='mx-3 my-3 bg-primary'>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#474e5d" }}>
                <div className='brand'><h3 style={{ fontWeight: "bold", textShadow: "1px 1px 3px black", color: "white" }}>Shopping here</h3></div>
                <div className=" navbar-collapse">
                    <ul className="navbar-nav mr-auto nav-ul">
                        <li>
                            <Link className="nav-link text-light" to="/login/home">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link text-light" to="/login/userProductlist">Shopping</Link>
                        </li>
                        <li>
                            <Link className="nav-link text-light" to="/login/about">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-inline my-2 my-lg-0" style={{ marginRight: "20px" }}>
                    <ul className="navbar-nav mr-auto nav-ul">
                        <li>
                            <p className="nav-link text-light" >{user.name}</p>
                        </li>
                        <li>
                            <Link className="nav-link text-light" to="/" ><i className='fa fa-sign-out' onClick={() => RedirectToHome()}>log Out</i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
