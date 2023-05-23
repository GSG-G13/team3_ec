import './nav.css'
import Search from '../Searchinput/Search'
import { Link, NavLink } from 'react-router-dom'
import { Home } from '../Home/Home'
import { ProductsPage } from '../../pages/ProductsListPage'
export const Nav = () => {


    return (
        <><header className="navbar-home">
            <nav className="navbar-wrapper">
                <div className="navbar-left-aligned">
                    <div className="logo-wrapper"><img alt='logo' src="http://localhost:3001/static/media/plant.a7fecfd9.png" className="responsive-img" /></div>
                    <a className="brand-logo mx-2" href="/">PLANToo</a>

                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className='nav-item-link'>HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/products'} className='nav-item-link'>PRODUCTS</NavLink>
                    </li>
                </ul>
                <div className="navbar-right-aligned">
                    <Search />
                    <ul className="navbar-nav navbar-fixed">
                        <li className="nav-item">
                            <a href='/' className="nav-icon-link">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-icon-link">
                                <i class="nav-icon fas fa-user-circle"></i>
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>

    )
}