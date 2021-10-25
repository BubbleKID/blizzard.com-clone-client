import './Menu.css';
import  { ReactComponent as MenuLogo } from '../../images/Blizzard_Entertainment-2.svg';
// import MenuLogo from '../../images/Blizzard_Entertainment-2.svg';

export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu">
                <div className="menu-items">
                    <a className="menu-logo"><MenuLogo /></a>
                    <div className="menu-button">
                        <a><span>Games</span></a>
                        <a><span>Shop</span></a>
                        <a><span>News</span></a>
                        <a><span>Esports</span></a>
                    </div>
                </div>
                <div className="profile">
                    <a><span>Support</span></a>
                    <a><span>My account</span></a>
                </div>
            </div>
        </div>
    )
}