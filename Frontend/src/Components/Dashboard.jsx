import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'



const Dashboard = () => {
    const navigate = useNavigate()

    
    return (

        <div className='height-100vh'>
            <nav className="container-fluid navbar navbar-dark background-primary fixed-top">
                <div className="container-fluid">
                    <p className="navbar-brand fs-5" >Yobel SCM</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end background-primary" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">Yobel SCM</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr className='text-light' />
                        <div className="offcanvas-body ">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={() => navigate("/Pedidos")}>Pedidos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={() => navigate("nuevo")}>Nuevo Pedido</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='h-100 container-fluid d-flex justify-content-center align-items-center'>

                <Outlet />

            </div>

        </div>
    )
}

export default Dashboard
