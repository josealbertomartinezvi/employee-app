import { NavLink } from 'react-router-dom';
import { links } from './config';

const Navegacion = () => (
    <nav className="navbar navbar-expand-lg text-white  bg-dark">
        <NavLink className={'navbar-brand'} to='/'>Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {links.map((link, index) => (
                    <li className="nav-item" key={index}>
                        <NavLink className={ 'nav-link' } to={link.path}>{ link.title }</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

export default Navegacion;
