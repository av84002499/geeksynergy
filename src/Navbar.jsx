import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    let navigate = useNavigate()

    const logouthandler=() =>{
        localStorage.clear()
        Swal.fire({
            icon: 'success',
            title: 'Logout in successfully!',
            showConfirmButton: false,
            timer: 3000, // 3 seconds
          });
          navigate("/")

    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Geeksynergy </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/register">Register </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/CompanyInfo">CompanyInfo </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn-primary m-2" onClick={logouthandler} >Logout</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        
        
    )
}