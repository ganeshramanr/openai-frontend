import './HomePage.css';

function HomePage() {

  return (
    <>
      <section className="widget">
        <h2>Overview</h2>
        <p>Welcome to your dashboard!</p>
      </section>
      <section className="widget">
        <h2>Recent Activity</h2>
        <ul>
          <li>User logged in</li>
          <li>New report generated</li>
          <li>Settings updated</li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;