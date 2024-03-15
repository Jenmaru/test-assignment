import React, { useState } from 'react';
import logo from '../logo.png';
import menu from './listMenu.js';

const Header = () => {
  const icons = ['bi-chevron-down', 'bi-chevron-up'];
  const [currentIcon, setIcon] = useState('bi-chevron-down');
  const getIcon = () => (icons[0] === currentIcon ? setIcon(icons[1]) : setIcon(icons[0]));

  return (
    <nav className="navbar navbar-expand-lg header app">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="localhost:3000">
          <img src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 row">
            {menu.map((el) => (el.id === 1
              ? (
                <li key={el.id} className="nav-item dropdown hover col">
                  <a className="nav-link dropdown" onClick={getIcon} href="localhost:3000" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {el.name}
                    <i className={`icon ${currentIcon}`} />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a key="1" className="dropdown-item" href="localhost:3000">Разработка моб. приложений</a></li>
                    <li><a key="2" className="dropdown-item" href="localhost:3000">Разработка интернет-магазина</a></li>
                    <li><a key="3" className="dropdown-item" href="localhost:3000">SEO-продвижение</a></li>
                  </ul>
                </li>
              )
              : (
                <li key={el.id} className="nav-item hover col">
                  <a className="nav-link" aria-current="page" href="localhost:3000">{el.name}</a>
                </li>
              )))}
          </ul>
          <button className="connect button" type="button">Связаться с нами</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
