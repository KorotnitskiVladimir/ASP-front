import { Outlet } from "react-router-dom";
import './Layout.css'

export default function Layout() {
    
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
      
      </>)   
  }