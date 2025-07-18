import React from 'react';
import './blog.css';

export default function Blog() {
  return (
    <div className="blog-container">
      <h2>Our Blog</h2>

      <section className="intro">
        <h3 className="fade-in">What is a Church Blog?</h3>
        <p className="fade-in">
          A church blog is a special place online where our community shares stories,
          teachings, encouragement, and updates. It’s a way to stay connected through
          words of faith and love throughout the week.
        </p>
        <h3 className="fade-in">Why Follow Our Blog?</h3>
        <ul className="fade-in">
          <li>To receive inspiring messages and reflections that uplift your spirit.</li>
          <li>To learn more about God’s Word and how it applies to everyday life.</li>
          <li>To hear about upcoming events, volunteer opportunities, and community projects.</li>
          <li>To connect with testimonies from people whose lives have been changed by God.</li>
        </ul>
        <h3 className="fade-in">What You’ll Find Here:</h3>
        <ul className="fade-in">
          <li>Devotionals and prayers to start your day with hope.</li>
          <li>Sermon highlights to revisit powerful messages.</li>
          <li>Stories from our members about their journeys of faith.</li>
          <li>News about church activities, outreach programs, and celebrations.</li>
          <li>Practical advice for living a Christ-centered life.</li>
        </ul>
      </section>

      <section className="posts">
        <h3 className="fade-in">Sample Blog Posts</h3>

        <article className="blog-post fade-in">
          <h4>Finding Strength in Difficult Times</h4>
          <p>
            Life isn’t always easy. When trials come, we can find strength by turning to God’s promises.
            Psalm 46:1 reminds us that “God is our refuge and strength, an ever-present help in trouble.”
            Whatever you’re facing, remember you’re not alone — our church family is here for you.
          </p>
        </article>

        <article className="blog-post fade-in">
          <h4>How to Grow in Faith Every Day</h4>
          <p>
            Faith isn’t just for Sundays. It grows with daily prayer, reading the Bible, and serving others.
            Start small: a moment of quiet prayer, a verse memorized, or an act of kindness.
            Let’s walk this journey together.
          </p>
        </article>

        <article className="blog-post fade-in">
          <h4>Upcoming Events You Don’t Want to Miss</h4>
          <p>
            Join us this Sunday for our monthly community picnic :  food, fun, and fellowship for all ages!
            Don’t forget our evening Bible study, open to everyone looking to dive deeper into God’s Word.
          </p>
        </article>

        <article className="blog-post fade-in">
          <h4>Volunteer Spotlight: Serving with Joy</h4>
          <p>
            Meet Sheila, one of our dedicated volunteers who helps run the church.
            Her heart for service inspires us all. If you want to make a difference,
            there are many ways to get involved.
          </p>
        </article>
      </section>

      <section className="footer-note fade-in">
        <p>
          Feel free to comment, share your own stories, or reach out with prayer requests.
          This space is for YOU :  to learn, grow, and connect.
        </p>
      </section>
    </div>
  );
}
