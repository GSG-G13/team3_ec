import pdt from '../../assets/hero-img.jpg'
import './home.css'
export const Home = () => {
    return (<div className="hero-img-wrapper">
        <div className="text-overlay">
            <h1 className="text-overlay-title">MAKE YOUR HOME A GREENER PLACE</h1>
            <button className="bttn bttn-primary bttn-lg">
                <a className="shop-btn" href="111">
                    SHOP NOW
                </a>
            </button>
        </div>
        <a href="#">

            <picture>
                <img
                    className="home-page-banner responsive-img"
                    src={pdt}
                    alt="plants"
                />
            </picture>

        </a>
    </div>)
}