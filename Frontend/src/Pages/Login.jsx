import React from 'react'

import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate()

    return (

        <div className="d-flex flex-column justify-content-center align-items-center height-100vh container-fluid">

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form className='d-flex flex-column flex-nowrap'>

                        <p className="text-center display-6">Iniciar Sesión</p>


                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">Email</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>


                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center w-100">
                                <div className="form-check mb-3 mb-md-0 w-100">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck"  />
                                    <label className="form-check-label" for="loginCheck"> Recordar usuario </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4 align-self-center"  onClick={() => navigate("/Pedidos")}>Acceder</button>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login

