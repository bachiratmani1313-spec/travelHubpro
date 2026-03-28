import "./style.css";

const destinations = {
  paris: {
    name: "Paris",
    country: "France",
    airport: "PAR",
    hotellookUrl: "https://search.hotellook.com/?destination=Paris&marker=499802",
    kiwiUrl: "https://kiwi.tp.st/499802",
    tiqetsUrl: "https://www.tiqets.com/en/paris-attractions-c66746/?partner=499802",
    carsUrl: "https://www.discovercars.com/?a_aid=499802",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200"
  },
  londres: {
    name: "Londres",
    country: "Royaume-Uni",
    airport: "LON",
    hotellookUrl: "https://search.hotellook.com/?destination=London&marker=499802",
    kiwiUrl: "https://kiwi.tp.st/499802",
    tiqetsUrl: "https://www.tiqets.com/en/london-attractions-c67458/?partner=499802",
    carsUrl: "https://www.discovercars.com/?a_aid=499802",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200"
  },
  barcelone: {
    name: "Barcelone",
    country: "Espagne",
    airport: "BCN",
    hotellookUrl: "https://search.hotellook.com/?destination=Barcelona&marker=499802",
    kiwiUrl: "https://kiwi.tp.st/499802",
    tiqetsUrl: "https://www.tiqets.com/en/barcelona-attractions-c66342/?partner=499802",
    carsUrl: "https://www.discovercars.com/?a_aid=499802",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=1200"
  },
  rome: {
    name: "Rome",
    country: "Italie",
    airport: "ROM",
    hotellookUrl: "https://search.hotellook.com/?destination=Rome&marker=499802",
    kiwiUrl: "https://kiwi.tp.st/499802",
    tiqetsUrl: "https://www.tiqets.com/en/rome-attractions-c71631/?partner=499802",
    carsUrl: "https://www.discovercars.com/?a_aid=499802",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200"
  },
  lisbonne: {
    name: "Lisbonne",
    country: "Portugal",
    airport: "LIS",
    hotellookUrl: "https://search.hotellook.com/?destination=Lisbon&marker=499802",
    kiwiUrl: "https://kiwi.tp.st/499802",
    tiqetsUrl: "https://www.tiqets.com/en/lisbon-attractions-c76528/?partner=499802",
    carsUrl: "https://www.discovercars.com/?a_aid=499802",
    image: "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&q=80&w=1200"
  }
};

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const city = destinations[params.slug];

  if (!city) {
    return {
      title: "Destination introuvable | Vrax Voyage"
    };
  }

  return {
    title: `${city.name} | Vols, hôtels, activités et voitures | Vrax Voyage`,
    description: `Comparez les vols, hôtels, activités et locations de voiture pour ${city.name} avec Vrax Voyage.`
  };
}

export default function DestinationPage({ params }) {
  const city = destinations[params.slug];

  if (!city) {
    return (
      <main className="container">
        <h2>Destination introuvable</h2>
      </main>
    );
  }

  return (
    <main className="destination-page">
      <section className="hero-city">
        <img src={city.image} alt={city.name} className="hero-city-image" />
        <div className="hero-city-overlay">
          <p className="city-country">{city.country}</p>
          <h1>{city.name}</h1>
          <p className="city-subtitle">
            Vols, hôtels, activités et location de voiture
          </p>
        </div>
      </section>

      <section className="destination-content">
        <div className="grid-links">
          <a
            href={`https://www.aviasales.com/search/${city.airport}?marker=499802`}
            target="_blank"
            rel="noopener noreferrer"
            className="city-card"
          >
            <h3>✈️ Vols Aviasales</h3>
            <p>Trouver les meilleurs billets pour {city.name}</p>
          </a>

          <a
            href={city.kiwiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="city-card"
          >
            <h3>🛫 Vols Kiwi</h3>
            <p>Comparer d’autres itinéraires à bas prix</p>
          </a>

          <a
            href={city.hotellookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="city-card"
          >
            <h3>🏨 Hôtels</h3>
            <p>Voir les meilleurs hôtels à {city.name}</p>
          </a>

          <a
            href={city.tiqetsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="city-card"
          >
            <h3>🎟️ Activités</h3>
            <p>Réserver des visites et attractions</p>
          </a>

          <a
            href={city.carsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="city-card"
          >
            <h3>🚗 Location voiture</h3>
            <p>Louer une voiture pour explorer {city.name}</p>
          </a>
        </div>
      </section>
    </main>
  );
}
