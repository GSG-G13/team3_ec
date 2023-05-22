import './nav.css'
import Search from '../Searchinput/Search'
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
                        <a href='/' className='nav-item-link'>HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href='/Products' className='nav-item-link'>PRODUCTS</a>
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
                            <a href='/' className="nav-icon-link">
                                <i class="nav-icon fas fa-user-circle"></i>
                            </a>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>

    )
}