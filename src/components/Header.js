import React from 'react';
import logo from '../logo.svg';

function Header(props) {
  
    return (
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" width={100} height={100}/>
            <button aria-label="Фильтр" type="button" className="header__button" onClick={props.onCardFilter}>liked cards</button>
        </header>
    );
}

export default Header; 