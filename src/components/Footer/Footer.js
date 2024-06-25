import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__item">
            <h3>О</h3>
            <ul>
              <li><a href="#">История</a></li>
              <li><a href="#">Наша команда</a></li>
              <li><a href="#">Условия использования</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div className="footer__item">
            <h3>Что мы делаем</h3>
            <ul>
              <li><a href="#">Новости и истории</a></li>
              <li><a href="#">Публикации</a></li>
              <li><a href="#">Рекомендации</a></li>
              <li><a href="#">Помощь</a></li>
            </ul>
          </div>
          <div className="footer__item">
            <h3>Наша компания</h3>
            <ul>
              <li><a href="#">улица Халимуна, 10</a></li>
              <li><a href="#">Джакарта, город 534</a></li>
              <li><a href="#">www.yourflowersite.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__social">
          <p>Подписывайтесь на нас!!</p>
          <a href="#"><img src="img/icons/Facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="img/icons/Instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="img/icons/Youtube.png" alt="Youtube" /></a>
        </div>
      </div>
  );
}

export default Footer;