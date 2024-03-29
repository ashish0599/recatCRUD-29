import {NavLink} from "react-router-dom";

function Header()
{
    return(
        <>
        <div className="navbar navbar-expand-md navbar-info justify-content-sm-start bg-dark mb-5">
            <span className="navbar-brand"></span>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navcollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcollapse">
                <ul className="navbar-nav ml-auto mr-5">
                   
            <li className="nav-item mx-3"><NavLink to="/" activeClassName="headerlink  " className="nav-link headertext">Home</NavLink></li>
            <li className="nav-item mx-3"><NavLink to="/" activeClassName="headerlink  " className="nav-link headertext">Users</NavLink></li>
                    <li className="nav-item mx-3"><NavLink to="/createuser" activeClassName="headerlink  " className="nav-link headertext">Create User</NavLink></li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Header;
 
