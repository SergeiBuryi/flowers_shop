import React, { useState } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;

  .header__container {
    position: absolute;
    top: 50px;
    left: 5%;
    width: 90%;
    height: 80px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    background-color: #333;
    color: #fff;
    z-index: 10;
  }

  .header__logo {
    flex: 0 0 20%;
    img {
      width: 130px;
    }
    &.active {
      margin: -70px 0 0 -50px;
      z-index: 5;
    }
  }

  .header__menu {
    flex: 1 1 80%;
    @media (max-width: 991px) {
      position: fixed;
      top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333;
      padding: 170px 10px 20px 10px;
      overflow: auto;
      transition: all 0.3s ease 0s;
    }
  }

  .header__list {
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0 10px;
      @media (max-width: 991px) {
        font-size: 24px;
        margin: 0px 0px 50px 0px;
        text-align: center;
      }
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    @media (max-width: 991px) {
      display: block;
    }
  }

  .header__form {
    display: block;
    visibility: ${({ isFormActive }) => (isFormActive ? 'visible' : 'hidden')};
    opacity: ${({ isFormActive }) => (isFormActive ? '1' : '0')};
    position: fixed;
    top: 130px;
    right: ${({ isFormActive }) => (isFormActive ? '5%' : '-100%')};
    transition: 0.3s ease;

    @media (max-width: 991px) {
      .form__wrap {
        flex-direction: column;
      }
      .form__input {
        margin: 0;
      }
    }
  }

  .header__burger {
    display: none;

    @media (max-width: 991px) {
      display: block;
      position: relative;
      width: 30px;
      height: 20px;
      z-index: 5;
      cursor: pointer;

      &:before,
      &:after {
        content: '';
        background-color: #fff;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        transition: all 0.3s ease 0s;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }

      span {
        background-color: #fff;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        top: 9px;
        transition: all 0.3s ease 0s;
      }

      &.active:after {
        transform: rotate(-45deg);
        bottom: 9px;
      }

      &.active:before {
        transform: rotate(45deg);
        top: 9px;
      }

      &.active span {
        transform: scale(0);
      }
    }
  }
`;

const BodyLock = createGlobalStyle`
  body.lock {
    overflow: hidden;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('lock', isMenuOpen);
  };

  return (
    <>
      <HeaderContainer isMenuOpen={isMenuOpen} isFormActive={isFormActive}>
        <div className="header__container">
          <div className="header__logo">
            <a href="#">
              <img src="img/icons/Logo.png" alt="Logo" />
            </a>
          </div>
          <div className="header__menu">
            <ul className="header__list">
              <li><a href="#">Домой</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Букеты</a></li>
              <li><a href="#">Сервисы</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className={`header__burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
        <div className={`header__form ${isFormActive ? 'active' : ''}`}>
          <div className="form">
            <div className="form__wrap">
              <input type="text" className="form__input" placeholder="Enter your email" />
              <button className="form__btn">Subscribe</button>
            </div>
          </div>
        </div>
      </HeaderContainer>
      {isMenuOpen && <BodyLock />}
    </>
  );
}

export default Header;