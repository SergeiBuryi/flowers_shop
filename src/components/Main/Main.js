import React from 'react';
import Header from '../Header/Header';
import './Main.css';

const Main = () => {
  return (
    <div className='main__container'>
      <Header />
      <section className="intro">
        <div className="intro__bg">
          <img src="/img/bg/bg1.png" alt="bg1" />
        </div>
        <div className="intro__container">
          <div className="intro__infoblock">
            <h1 className="infoblock__maintitle">ЦВЕТОЧНЫЙ МАГАЗИН</h1>
            <h2 className="infoblock__title">Букет любви</h2>
            <p className="infoblock__text">
            Букет "Любви не боялась ты" - это прекрасный выбор для выражения самых искренних чувств. 
            Этот роскошный букет, состоящий из пионовидных роз, анемонов, гвоздик и других изысканных цветов, станет идеальным подарком для любимого человека. 
            </p>
          </div>
        </div>
      </section>

      <section className="discount">
        <div className="discount__container">
          <h2 className="discount__title">Получите скидку на свою</h2>
          <p className="discount__text">первую покупку.</p>
        </div>
      </section>

      <section className="products">
        <div className="products__info info">
          <h2 className="info__title">Наши продукты</h2>
          <p className="info__text">
          Наш цветочный магазин предлагает широкий ассортимент высококачественных цветов и букетов для любого случая. 
          От роскошных свадебных композиций до элегантных букетов для деловых встреч, мы гарантируем, что вы найдете то, что вам нужно. 
          </p>
        </div>
        <div className="products__cards cards">
          {[1, 2, 3].map((num) => (
            <div key={num} className="cards__container">
              <div className="cards__img">
                <img src={`/img/pic/img_lit${num}.png`} alt={`img_lit${num}`} />
              </div>
              <div className="cards__txt">
                <h3 className="cards__title">Название</h3>
                <p className="cards__text">
                  Эти жизнерадостные цветы с их яркими, солнечными лепестками привносят в букет радость и позитивный настрой.
                </p>
              </div>
              <button className="cards__button btn">Read more</button>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about__container">
          <div className="about__pic">
            <img src="/img/pic/img2.png" alt="img2" />
          </div>
          <div className="about__blocktext blocktext">
            <h3 className="blocktext__title">О нас</h3>
            <p className="blocktext__text">
            Наш цветочный магазин был основан в 2024 году с целью предоставления высококачественных цветов и букетов жителям нашего города. 
            За годы работы мы стали одним из ведущих поставщиков цветов в регионе, благодаря нашей приверженности качеству, креативности и превосходному обслуживанию клиентов.
            </p>
            <button className="blocktext__btn btn">Read more</button>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <div className="subscribe__bg">
          <img src="/img/bg/bg4.png" alt="bg4" />
        </div>
        <div className="subscribe__container">
          <div className="subscribe__title">
            <h2>SUBSCRIBE TO OUR NEWS LETTER</h2>
          </div>
          <div className="subscribe__form">
            <form name="subscribe" action="#" method="post">
              <input
                placeholder="Your Name"
                tabIndex="1"
                name="name"
                type="text"
                required="required"
              />
              <input
                placeholder="Mail"
                tabIndex="2"
                name="mail"
                type="email"
                required="required"
              />
              <textarea placeholder="Messages" tabIndex="3" name="message"></textarea>
              <button className="btn" tabIndex="4" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;