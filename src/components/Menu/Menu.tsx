import './Menu.css';
import React from 'react';
import { ReactComponent as MenuLogo } from '../../images/Blizzard_Entertainment-2.svg';

export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu">
                <div className="menu-items">
                    <a>
                        <MenuLogo/>
                    </a>
                    <a><span>Games</span></a>
                    <a><span>Shop</span></a>
                    <a><span>News</span></a>
                    <a><span>Esports</span></a>
                </div>
                <div className="profile">
                    <a><span>Support</span></a>
                    <a><span>My account</span></a>
                </div>
            </div>
        </div>
    )
}