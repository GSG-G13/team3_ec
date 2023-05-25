import { Link } from 'react-router-dom'
import './home.css'
export const Home = () => {
    return (<div className="hero-img-wrapper">
        <div className="text-overlay">
            <h1 className="text-overlay-title">MAKE YOUR HOME A GREENER PLACE</h1>
            <button className="bttn bttn-primary bttn-lg">
                <Link className="shop-btn" to={'/products'}>
                    SHOP NOW
                </Link>
            </button>
        </div>
    </div>
    )
}