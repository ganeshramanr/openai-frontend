// import { Breadcrumbs, Link } from '@mui/material';
import './HomePage.css';

function HomePage() {

  return (
    <>
      {/* // TODO Breadcrumbs is sample code
      <Breadcrumbs aria-label="breadcrumb>" >
        <Link underline="hover" color="inherit" href="/home">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/about">
          About
        </Link>
      </Breadcrumbs> */}
      <h2>About Us</h2>
      <section className="widget">
        <p>Our company specializes in rapid, cost-effective MVP development for startups. We understand that time and budget are critical for new ventures, so we've optimized our process to deliver high-quality minimum viable products in the shortest timeframe possible.</p>
        <p>We partner closely with founders to turn ideas into functional products rapidly. Our goal is to help you validate your concept, gather user feedback, and iterate quickly - all while conserving your valuable time and resources. With our efficient MVP development, you can test your market fit and attract investors faster.</p>
      </section>
      <section className="widget">
        <h4>Key features of our MVP development service</h4>
        <ul>
          <li><i>Lean approach:</i> We focus on core functionality to validate your concept quickly</li>
          <li><i>Agile methodology:</i> Iterative development with frequent feedback loops</li>
          <li><i>Experienced team:</i> Seasoned developers who specialize in MVP creation</li>
          <li><i>Affordable pricing:</i> Competitive rates tailored for startup budgets</li>
          <li><i>Accelerated timeline:</i> Streamlined process to launch your MVP in weeks, not months</li>
          <li><i>Scalable architecture:</i> Built to grow as your startup evolves</li>
          <li><i>Technology expertise:</i> Proficiency across web, mobile, and emerging tech stacks</li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;