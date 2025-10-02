import React from 'react';
import './About.css';
import pastorImage from '../../assets/pastor.jpeg';  // Adjust path based on your project structure

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p className="about-paragraph">
             CORIM Ministries is a vibrant community of believers rooted in the love of Christ.
            We are committed to spreading the gospel, serving our neighbours, and growing together in faith.
            Our mission is to glorify God, love one another, and reach the world with the message of hope and salvation.
          </p>

          <p className="about-paragraph">
            Whether you're new to the faith or have been walking with Jesus for years, you'll find a home here.
            We believe the church is not just a building, but a family where everyone is welcome.
          </p>

          <p className="about-paragraph">
            Our services are filled with passionate worship, sound biblical teaching, and an atmosphere where the Holy Spirit moves freely.
            We believe in the power of prayer and the importance of strong, Christ-centered relationships.
          </p>

          <p className="about-paragraph">
            Throughout the week, we host small groups, Bible studies, youth gatherings, and community outreach projects.
            These programs help build lasting connections and deepen our walk with God.
          </p>

          <p className="about-paragraph">
            At CORIM, we believe that every person has a purpose.
            We are here to help you discover your calling, grow in your gifts, and serve both the church and the world around you.
          </p>

          <p className="about-paragraph">
            We invite you to join us ; not just on Sundays, but to be part of a thriving, Spirit-led family that supports, encourages, and walks with you through every season of life.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img
            src={pastorImage}
            alt="Our Pastor"
            className="about-image"
          />
          <p className="image-caption">Pastor preaching during online service</p>
        </div>
      </div>
    </section>
  );
}
