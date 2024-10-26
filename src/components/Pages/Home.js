// Home.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import slider1 from "../../Images/slider1.avif";
import Scroll from "./Scroll";
import img1 from "../../Images/img4.png";


export default function Home() {
  return (
    <div className="home-container">
      {/* Section 1: Carousel */}
      <section className="section-carousel">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img className="carousel-images" src={slider1} alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img
              className="carousel-images"
              src="https://via.placeholder.com/800x400"
              alt="Slide 2"
            />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img
              className="carousel-images"
              src="https://via.placeholder.com/800x400"
              alt="Slide 3"
            />
            <p className="legend">Slide 3</p>
          </div>
        </Carousel>
      </section>

      {/* Section 2: Text Section with Image */}
      <section className="section-text">
        <h2 style={{color:"#fff"}}>Welcome to Our Website</h2>
        <div className="text-content">
          <div className="section-image" />
          <div className="section-description">
            <p>
              We provide top-notch services in web development, app development,
              and more. Our mission is to deliver high-quality solutions
              tailored to meet the unique needs of our clients. Whether you're
              looking for a simple website or a complex web application, our
              team of experts is here to help you every step of the way.
            </p>
            <a href="#read-more" className="read-more-btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Services Grid */}
      <section className="section-grid-home">
        <h2 style={{color:"#fff"}}>Our Services</h2>
        <div className="grid-container-home">
          <div className="grid-item-home">
            <img src={img1} alt="Service 1" />
            <h3>Example</h3>
            <hr />
            <p>
              Build modern and responsive websites that look great on all
              devices.
            </p>
          </div>
          <div className="grid-item-home">
            <img src="https://via.placeholder.com/150" alt="Service 2" />
            <h3>Example</h3>
            <hr />
            <p>
              Create powerful mobile apps for both Android and iOS platforms.
            </p>
          </div>
          <div className="grid-item-home">
            <img src="https://via.placeholder.com/150" alt="Service 3" />
            <h3>Example</h3>
            <hr />
            <p>
              Optimize your website to rank higher in search engine results.
            </p>
          </div>
          <div className="grid-item-home">
            <img src="https://via.placeholder.com/150" alt="Service 4" />
            <h3>Example</h3>
            <hr />
            <p>
              Grow your online presence and reach more customers with our
              marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Scroll Component */}
      <Scroll />

      {/* Section 5: Registration Section */}
      <section className="section-reg" >
        <div className="registration-container">
          <h1>Registration Open</h1>
          {/* <h2>Register Here!</h2> */}
          <button className="register-button">Register Here!</button>
        </div>
      </section>
    </div>
  );
}
