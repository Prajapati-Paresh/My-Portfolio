import React from 'react';
import './CardSection.css';

const cardData = [
  {
    title: 'Hotel Management System',
    img: 'src/assets/Screenshot 2025-07-17 222509.png',
    text: '"A complete solution to manage hotel rooms, bookings, and customer data efficiently."'
  },
  {
    title: 'Go Food Delivery System',
    img: 'src/assets/Screenshot 2025-07-17 222629.png',
    text: '"An all-in-one platform to manage orders, deliveries, restaurants, and customer satisfaction."'
  },
  {
    title: 'Croma Electronics Management System',
    img: 'src/assets/Screenshot 2025-07-17 222724.png',
    text: '"Streamline electronics retail with real-time inventory, invoicing, and customer management."'
  },
  {
    title: 'Sweet Shopping System',
    img: 'src/assets/Screenshot 2025-07-17 222855.png',
    text: '"Smartly handle your sweet shops orders, billing, and inventory in one place."'
  },
  {
    title: 'Restorn',
    img: 'src/assets/Screenshot 2025-07-17 223004.png',
    text: '"A restaurant UI project built to practice and explore Bootstrap components and layouts."'
  },
  {
    title: 'Pizza Shop & Delivery System',
    img: 'src/assets/Screenshot 2025-07-17 223220.png',
    text: '"Developed as a Bootstrap practice project to design a responsive pizza shop and delivery website."'
  },
];

const CardSection = () => {
  return (
    <section className="card-section">
      <h2 className="highlighted-title">
        <span className="tag">&lt;h2&gt;</span>
        Latest <span className="white">Works</span>
        <span className="tag">&lt;/h2&gt;</span>
      </h2>
      <p className="orbit-subtext">Projects I have built</p>

      <div className="container-fluid card-wrapper py-5">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card-custom">
                <div className="img-box">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="content">
                  <h2 className="mt-3 pb-3">{card.title}</h2>
                  <p className="mt-3">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
