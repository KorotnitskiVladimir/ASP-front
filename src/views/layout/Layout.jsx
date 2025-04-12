import { Outlet } from "react-router-dom";
import './Layout.css'
import { useState } from "react";

export default function Layout() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const authClick = () => {
        console.log(login, password);
    }
    
    return(
    <>
    <header>
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container-fluid">
            <a className="navbar-brand">ASP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul className="navbar-nav flex-grow-1">
                    <li className="nav-item">
                        <a className="nav-link text-dark">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark">Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark">Shop</a>
                    </li>
                </ul>
                <span className="nav-link text-dark cursor-pointer" data-bs-toggle="modal"
                        data-bs-target="#authModal">Sing In</span>
                <a className="nav-link text-dark">Sign Up</a>
            </div>
        </div>
    </nav>
</header>
    <div className="container flex-1">
        <main role="main" className="pb-3">
        <Outlet/>
        </main>
    </div>

    <footer className="border-top footer text-muted">
        <div className="container">
            &copy; 2025 - ASP - <a>Privacy</a>
        </div>
    </footer>

    <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="authModalLabel">Authentification</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div className="modal-body">
            <form id="auth-modal-form">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="AuthLogin-addon"><i className="bi bi-box-arrow-in-right"></i></span>
                    <input type="text" className="form-control"
                           value={login} placeholder="AuthLogin" onChange={e => setLogin(e.target.value)}
                           aria-label="AuthLogin" aria-describedby="AuthLogin-addon"></input>
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="AuthPassword-addon"><i className="bi bi-key"></i></span>
                    <input type="password" className="form-control" 
                       value={password} placeholder="AuthPassword" onChange={e => setPassword(e.target.value)}
                       aria-label="AuthPassword" aria-describedby="AuthPassword-addon"></input>
                </div>
            </form>
        </div>
            <div className="modal-footer">
                <span id="message"></span>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Dismiss</button>
                <button type="button" onClick={authClick} form="auth-modal-form" className="btn btn-primary">Enter</button>
            </div>
        </div>
  </div>
</div>
      
      </>)   
  }