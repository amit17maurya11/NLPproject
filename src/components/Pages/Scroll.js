import React from "react";
import "./Scroll.css";
import bg from '../../Images/bg.webp'
import img1 from '../../Images/Speakers/img1.webp'
import img2 from '../../Images/Speakers/img2.webp'
import img3 from '../../Images/Speakers/imh3.webp'
import img4 from '../../Images/Speakers/img4.webp'
import img5 from '../../Images/Speakers/img5.webp'
import img6 from '../../Images/Speakers/img6.webp'
import img7 from '../../Images/Speakers/img7.webp'
import img8 from '../../Images/Speakers/img8.webp'
import img9 from '../../Images/Speakers/img9.webp'


export default function Scroll() {
  return (
    <div className="home-container">
      <section className="section-scrollable">
        <div className="static-sidebar">
          <div className="sidebar-section">
            <h2>Industries</h2>
            <ul className="sidebar-list">
              <li>
                <a href="#architecture">Engineer </a>
              </li>
              <li>
                <a href="#construction"> Doctor </a>
              </li>
              <li>
                <a href="#product-design">Product Design & Manufacturing </a>
              </li>
              <li>
                <a href="#civil-infrastructure">Scientist </a>
              </li>
              <li>
                <a href="#media">Educator </a>
              </li>
              <li>
                <a href="#autocad">Law</a>
              </li>
              <li>
                <a href="#platform-services">Finance and Business </a>
              </li>
              <li>
                <a href="#platform-services">Creative Fields </a>
              </li>
              <li>
                <a href="#see-more">See More </a>
              </li>
            </ul>
          </div>
          {/* <div className="sidebar-section">
            <h2>More learning</h2>
            <ul className="sidebar-list">
              <li>
                <a href="#au-blog">Read the AU blog </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="right-scrollable">
          <h3 style={{color:"#fff"}}>Speakers</h3>
          <div className="grid-container">
            <div className="grid-item">
              <div className="card-content">
                <img
                  src={img1}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card-content">
                <img
                  src={img2}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid-item">
              <div className="card-content">
                <img
                src={img3}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid-item">
              <div className="card-content">
                <img
                  src={img4}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid-item">
              <div className="card-content">
                <img
                 src={img5}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid-item">
              <div className="card-content">
                <img
                 src={img6}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid-item">
              <div className="card-content">
                <img
                  src={img7}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid-item">
              <div className="card-content">
                <img
                 src={img8}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="card-content">
                <img
                  src={img9}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
                
              </div>
              
            </div>
            <div className="grid-item">
              <div className="card-content">
                <img
                  src={img9}
                  alt="Service"
                  className="card-img"
                />
                <div className="card-text">
                  <div className="card-title">Mr. Dipak Gupta</div>
                  <div className="card-subtitle">
                    Joint Managing Director
                    <br />
                    Kotak Mahindra Bank
                  </div>
                  <div className="card-description">
                    Optimizing and overseeing operational strategies.
                  </div>
                </div>
                
              </div>
              
            </div>
            {/* <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 1" />
              <h3>Web Development</h3>
              <p>Build modern and responsive websites that look great on all devices.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 2" />
              <h3>App Development</h3>
              <p>Create powerful mobile apps for both Android and iOS platforms.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 3" />
              <h3>SEO</h3>
              <p>Optimize your website to rank higher in search engine results.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 4" />
              <h3>Digital Marketing</h3>
              <p>Grow your online presence and reach more customers with our marketing services.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 1" />
              <h3>Web Development</h3>
              <p>Build modern and responsive websites that look great on all devices.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 2" />
              <h3>App Development</h3>
              <p>Create powerful mobile apps for both Android and iOS platforms.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 3" />
              <h3>SEO</h3>
              <p>Optimize your website to rank higher in search engine results.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 4" />
              <h3>Digital Marketing</h3>
              <p>Grow your online presence and reach more customers with our marketing services.</p>
            </div> <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 1" />
              <h3>Web Development</h3>
              <p>Build modern and responsive websites that look great on all devices.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 2" />
              <h3>App Development</h3>
              <p>Create powerful mobile apps for both Android and iOS platforms.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 3" />
              <h3>SEO</h3>
              <p>Optimize your website to rank higher in search engine results.</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/150" alt="Service 4" />
              <h3>Digital Marketing</h3>
              <p>Grow your online presence and reach more customers with our marketing services.</p>
            </div> */}
          </div>
          <div>
            <h2 style={{textAlign:'center', color:"#fff"}}>Up Coming Event</h2>
            <div className="upcoming-events-container">
              <img
                src={bg}
                alt="Upcoming Events"
                className="upcoming-events-img"
              />
              <div className="upcoming-events-overlay">
                <div style={{position:'absolute',left:"3%"}}>
              <p>  Exciting Events Coming Soon</p>
              <button className="read-more">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
