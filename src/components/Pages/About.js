// About.js
import React from 'react';
import './About.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import userImage from "../../Images/bg.webp"; // Placeholder user image

const About = () => {
  // Sample user testimonials
  const testimonials = [
    { id: 1, text: "Great service! Highly recommend.", img: userImage },
    { id: 2, text: "The team was professional and very responsive.", img: userImage },
    { id: 3, text: "They delivered beyond my expectations!", img: userImage },
    { id: 4, text: "Fantastic experience working with them.", img: userImage },
    { id: 5, text: "Extremely satisfied with the final product.", img: userImage },
    { id: 6, text: "Their attention to detail is commendable.", img: userImage },
    { id: 7, text: "Great service! Highly recommend.", img: userImage },
    { id: 8, text: "The team was professional and very responsive.", img: userImage },
    { id: 9, text: "They delivered beyond my expectations!", img: userImage },
    { id: 10, text: "Fantastic experience working with them.", img: userImage },
    { id: 11, text: "Extremely satisfied with the final product.", img: userImage },
    { id: 12, text: "Their attention to detail is commendable.", img: userImage },
  ];

  // Function to chunk testimonials into groups of 3
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedTestimonials = chunkArray(testimonials, 3); // Group into chunks of 3

  return (
    <div className="about-container">
      {/* Section 1: Video and Text */}
      <section className="about-section1">
        {/* <div className="video-container">
          <video controls className="about-video">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
         <div className="video-container">
          {/* YouTube Video */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HFJXxSJb9sI" // Embedded YouTube video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to providing top-notch services in web and app development.
            Our mission is to empower our clients with the best solutions tailored to their needs.
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </section>

      <section className="about-section1">
        
        <div className="text-container">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to providing top-notch services in web and app development.
            Our mission is to empower our clients with the best solutions tailored to their needs.
          </p>
          <button className="about-button">Learn More</button>
        </div>
        <div className="video-container">
          {/* YouTube Video */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HFJXxSJb9sI" // Embedded YouTube video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Section 2: User Testimonials Carousel */}
      <section className="about-section2">
        <h2  style={{textAlign:"center",color:"#ffff"}}>User Testimonials</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {chunkedTestimonials.map((chunk, index) => (
            <div key={index} className="testimonial-container">
              <div className="testimonial-flex">
                {chunk.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <img src={testimonial.img} alt={`User ${testimonial.id}`} />
                    <p>{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Section 3: Additional Cards */}
      <section className="about-section3">
        <h2 style={{textAlign:"center",color:"#ffff"}}>Our Services</h2>
        <div className="grid-container">
          <div className="grid-card">
            <h3>Example</h3>
            <p>Building responsive and modern websites.</p>
          </div>
          <div className="grid-card">
            <h3>Example</h3>
            <p>Creating powerful mobile applications.</p>
          </div>
          <div className="grid-card">
            <h3>Example</h3>
            <p>Improving your website's visibility in search engines.</p>
          </div>
          <div className="grid-card">
            <h3>Example</h3>
            <p>Helping you grow your online presence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
