import React from 'react';
import './Home.css';
import churchImage from '../../assets/church.jpg';


export default function Home() {
  return (
    <div className="home-container">

     {/* Hero Section */}
<section className="hero">
  <h1 className="hero-title">Welcome to CORIM Ministries</h1>
  <p className="hero-subtitle">A place to grow in faith, love, and community</p>
  <a
    href="https://www.facebook.com/profile.php?id=100077531105752"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-button"  // style this to look like a button
  >
    Join Us This Sunday
  </a>
</section>


      {/* Church Image Section */}
      <section className="church-image-section">
        <img src={churchImage} alt="Grace Fellowship Church" className="church-image" />
        <p className="church-caption">Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit</p>
      </section>

      {/* Service Times */}
      <section className="services">
        <h2 className="section-title">Sunday Services</h2>
        <p className="service-time">Morning Worship - 11:00 AM</p>
        <p className="service-location">23 Giffin Street, London, UK</p>
      </section>

      {/* Watch Online */}
      <section className="watch-online">
  <h2 className="section-title">Can't make it in person?</h2>
  <p className="watch-description">Watch our live stream every Sunday at 11AM</p>
  <a
    href="https://www.facebook.com/watch/live/?mibextid=wwXIfr&ref=watch_permalink&v=2468942850105970&rdid=AxxMavKxqu78C1T8"
    target="_blank"
    rel="noopener noreferrer"
    className="watch-button"
  >
    Watch Online
  </a>
</section>

    </div>
  );
}
