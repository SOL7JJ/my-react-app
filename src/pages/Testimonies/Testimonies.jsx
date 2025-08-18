import React from 'react';
import './Testimonies.css';

export default function Testimonies() {
  return (
    <div className="testimonies-container">
      <h2>Testimonies</h2>

      <section className="intro">
        <h3 className="fade-in">What Are Testimonies?</h3>
        <p className="fade-in">
          Testimonies are personal stories of how God has worked in our lives. They inspire,
          encourage, and remind us that God is always present, transforming hearts and circumstances.
        </p>

        <h3 className="fade-in">Why Share Testimonies?</h3>
        <ul className="fade-in">
          <li>To glorify God and celebrate His goodness.</li>
          <li>To encourage others in their walk of faith.</li>
          <li>To show the power of prayer and God's love in action.</li>
          <li>To build connection and unity within our church family.</li>
        </ul>

        <h3 className="fade-in">What You’ll Find Here:</h3>
        <ul className="fade-in">
          <li>Stories of healing, provision, and answered prayers.</li>
          <li>Journeys of transformation and faith through trials.</li>
          <li>Accounts of salvation, restoration, and new beginnings.</li>
          <li>Moments of divine encounter and spiritual growth.</li>
        </ul>
      </section>

      <section className="posts">
        <h3 className="fade-in">Member Testimonies</h3>

        <article className="testimony-post fade-in">
          <h4>He Healed Me From Anxiety</h4>
          <p>
            For years, I struggled with anxiety and fear. Through prayer and support from our church,
            God gave me peace beyond understanding. Philippians 4:6-7 became real in my life.
          </p>
        </article>

        <article className="testimony-post fade-in">
          <h4>From Darkness to Light</h4>
          <p>
            I was lost, addicted, and far from God. But through a church outreach, I found hope and gave my life to Christ.
            Today, I’m walking in freedom, and my life has purpose again.
          </p>
        </article>

        <article className="testimony-post fade-in">
          <h4>God Provided When I Had Nothing</h4>
          <p>
            I lost my job and didn’t know how I’d make it. But God opened doors, and people from the church blessed me in ways I’ll never forget.
            He is truly Jehovah Jireh — our Provider.
          </p>
        </article>

        <article className="testimony-post fade-in">
          <h4>My Family Was Restored</h4>
          <p>
            Years of pain and separation had torn my family apart. But through prayer and forgiveness, God restored what was broken.
            Now we worship together and grow stronger each day.
          </p>
        </article>
      </section>

      <section className="footer-note fade-in">
        <p>
          Do you have a testimony to share? We’d love to hear how God has worked in your life.
          Reach out to us or share your story to encourage others in their journey.
        </p>
      </section>
    </div>
  );
}
