"use client";

const cities = [
  { slug: "paris", name: "Paris" },
  { slug: "londres", name: "Londres" },
  { slug: "barcelone", name: "Barcelone" },
  { slug: "rome", name: "Rome" },
  { slug: "lisbonne", name: "Lisbonne" },
  { slug: "newyork", name: "New York" },
  { slug: "dubai", name: "Dubai" },
  { slug: "tokyo", name: "Tokyo" },
  { slug: "bangkok", name: "Bangkok" },
  { slug: "singapour", name: "Singapour" },
  { slug: "istanbul", name: "Istanbul" },
  { slug: "berlin", name: "Berlin" },
  { slug: "madrid", name: "Madrid" },
  { slug: "amsterdam", name: "Amsterdam" },
  { slug: "bruxelles", name: "Bruxelles" }
];

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h2>Compare Flights, Hotels & Travel Deals</h2>
        <p>Vrax Voyage compare the best travel deals worldwide.</p>
      </section>

      <section className="cards-grid">
        <a
          href="https://www.aviasales.com/?marker=499802"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          ✈️ Flights Aviasales
        </a>

        <a
          href="https://kiwi.tp.st/499802"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          🛫 Flights Kiwi
        </a>

        <a
          href="https://search.hotellook.com/?marker=499802"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          🏨 Hotels
        </a>

        <a
          href="https://www.tiqets.com/en/?partner=499802"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          🎟️ Activities
        </a>

        <a
          href="https://www.discovercars.com/?a_aid=499802"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          🚗 Cars
        </a>
      </section>

      <section className="destinations-section">
        <h3>Popular Destinations</h3>
        <div className="destinations-grid">
          {cities.map((city) => (
            <a
              key={city.slug}
              href={`/destinations/${city.slug}`}
              className="destination-card"
            >
              {city.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
