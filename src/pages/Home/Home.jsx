import React from 'react';
import './Home.css';
import churchImage from '../../assets/church.jpg';
import Image from '../../assets/bible.jpg';
import Image2 from '../../assets/PRAYER.jpg';
import Image3 from '../../assets/BIBLE2.jpg';



export default function Home() {
  return (
    <div className="home-container">


      {/* Church Image Section */}
      <section className="church-image-section">
        <img src={churchImage} alt="Grace Fellowship Church" className="church-image" />
        <p className="church-caption">Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit</p>
      </section>


     {/* Hero Section */}
<section className="hero">
  <h1 className="hero-title">Welcome to City of refuge International Ministries</h1>
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


{/* Image Section */}
      <section className="image-section">
        <img src={Image} alt="Grace Fellowship Church" className="image" />
        <h1 className="hero-title"> After Church </h1>
      </section>


    
    {/* Image2 Section */}
      <section className="image2-section">
        <img src={Image2} alt="Grace Fellowship Church" className="image2" />
        <h1 className="hero-title">Prayer request</h1>
      </section>

 {/* Image3 Section */}
      <section className="image3-section">
        <img src={Image3} alt="Grace Fellowship Church" className="image3" />
        <h1 className="hero-title">Discover your purpose</h1>
      </section>



 
  {/* Service Times */}
      <section className="services">
        <h2 className="section-title">Sunday Services</h2>
        <p className="service-time">Morning Worship - 11:00 AM</p>
        <p className="service-location">Giffin Street, Deptford , London, UK</p>
      </section>

      {/* Watch Online */}
      <section className="watch-online">
  <h2 className="section-title">All  Upcoming events</h2>
  <p className="watch-description">Watch our live stream</p>
  <a
    href="https://www.facebook.com/watch/live/?mibextid=wwXIfr&ref=watch_permalink&v=2468942850105970&rdid=AxxMavKxqu78C1T8"
    target="_blank"
    rel="noopener noreferrer"
    className="watch-button"
  >
    View all events
  </a>
</section>

    </div>
  );
}
