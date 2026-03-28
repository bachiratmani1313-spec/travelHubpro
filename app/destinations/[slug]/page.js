import styles from "./style.module.css";

const destinations = {
  paris:{name:"Paris",country:"France",airport:"PAR"},
  londres:{name:"Londres",country:"UK",airport:"LON"},
  barcelone:{name:"Barcelone",country:"Espagne",airport:"BCN"},
  rome:{name:"Rome",country:"Italie",airport:"ROM"},
  lisbonne:{name:"Lisbonne",country:"Portugal",airport:"LIS"},
  newyork:{name:"New York",country:"USA",airport:"NYC"},
  dubai:{name:"Dubai",country:"UAE",airport:"DXB"},
  tokyo:{name:"Tokyo",country:"Japon",airport:"TYO"},
  bangkok:{name:"Bangkok",country:"Thaïlande",airport:"BKK"},
  singapour:{name:"Singapour",country:"Singapour",airport:"SIN"},
  istanbul:{name:"Istanbul",country:"Turquie",airport:"IST"},
  berlin:{name:"Berlin",country:"Allemagne",airport:"BER"},
  madrid:{name:"Madrid",country:"Espagne",airport:"MAD"},
  amsterdam:{name:"Amsterdam",country:"Pays-Bas",airport:"AMS"},
  bruxelles:{name:"Bruxelles",country:"Belgique",airport:"BRU"},
  vienne:{name:"Vienne",country:"Autriche",airport:"VIE"},
  prague:{name:"Prague",country:"République tchèque",airport:"PRG"},
  budapest:{name:"Budapest",country:"Hongrie",airport:"BUD"},
  athens:{name:"Athènes",country:"Grèce",airport:"ATH"},
  dublin:{name:"Dublin",country:"Irlande",airport:"DUB"},
  miami:{name:"Miami",country:"USA",airport:"MIA"},
  losangeles:{name:"Los Angeles",country:"USA",airport:"LAX"},
  sanfrancisco:{name:"San Francisco",country:"USA",airport:"SFO"},
  toronto:{name:"Toronto",country:"Canada",airport:"YYZ"},
  montreal:{name:"Montréal",country:"Canada",airport:"YUL"},
  sydney:{name:"Sydney",country:"Australie",airport:"SYD"},
  melbourne:{name:"Melbourne",country:"Australie",airport:"MEL"},
  capetown:{name:"Cape Town",country:"Afrique du Sud",airport:"CPT"},
  marrakech:{name:"Marrakech",country:"Maroc",airport:"RAK"},
  casablanca:{name:"Casablanca",country:"Maroc",airport:"CMN"},
  cairo:{name:"Le Caire",country:"Égypte",airport:"CAI"},
  delhi:{name:"Delhi",country:"Inde",airport:"DEL"},
  mumbai:{name:"Mumbai",country:"Inde",airport:"BOM"},
  hongkong:{name:"Hong Kong",country:"Chine",airport:"HKG"},
  seoul:{name:"Séoul",country:"Corée du Sud",airport:"SEL"},
  jakarta:{name:"Jakarta",country:"Indonésie",airport:"CGK"},
  kualalumpur:{name:"Kuala Lumpur",country:"Malaisie",airport:"KUL"},
  mexico:{name:"Mexico City",country:"Mexique",airport:"MEX"},
  saopaulo:{name:"São Paulo",country:"Brésil",airport:"SAO"},
  rio:{name:"Rio de Janeiro",country:"Brésil",airport:"RIO"},
  buenosaires:{name:"Buenos Aires",country:"Argentine",airport:"BUE"},
  santiago:{name:"Santiago",country:"Chili",airport:"SCL"},
  lima:{name:"Lima",country:"Pérou",airport:"LIM"},
  auckland:{name:"Auckland",country:"Nouvelle-Zélande",airport:"AKL"},
  doha:{name:"Doha",country:"Qatar",airport:"DOH"},
  abuDhabi:{name:"Abu Dhabi",country:"UAE",airport:"AUH"},
  lasvegas:{name:"Las Vegas",country:"USA",airport:"LAS"},
  chicago:{name:"Chicago",country:"USA",airport:"CHI"},
  boston:{name:"Boston",country:"USA",airport:"BOS"},
  washington:{name:"Washington",country:"USA",airport:"WAS"}
};

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const city = destinations[params.slug];
  if (!city) return { title: "Vrax Voyage" };

  return {
    title: `${city.name} | Vols, hôtels, activités | Vrax Voyage`,
    description: `Voyage pas cher à ${city.name}`
  };
}

export default function DestinationPage({ params }) {
  const city = destinations[params.slug];

  if (!city) {
    return <main className={styles.container}><h2>Not found</h2></main>;
  }

  return (
    <main className={styles.destinationPage}>
      <section className={styles.heroCity}>
        <div className={styles.heroCityOverlay}>
          <p className={styles.cityCountry}>{city.country}</p>
          <h1>{city.name}</h1>
        </div>
      </section>

      <section className={styles.destinationContent}>
        <div className={styles.gridLinks}>
          <a href={`https://www.aviasales.com/search/${city.airport}?marker=499802`} target="_blank" rel="noopener noreferrer" className={styles.cityCard}>
            ✈️ Vols Aviasales
          </a>

          <a href="https://kiwi.tp.st/499802" target="_blank" rel="noopener noreferrer" className={styles.cityCard}>
            🛫 Vols Kiwi
          </a>

          <a href={`https://search.hotellook.com/?destination=${encodeURIComponent(city.name)}&marker=499802`} target="_blank" rel="noopener noreferrer" className={styles.cityCard}>
            🏨 Hôtels
          </a>

          <a href="https://www.tiqets.com/en/?partner=499802" target="_blank" rel="noopener noreferrer" className={styles.cityCard}>
            🎟️ Activités
          </a>

          <a href="https://www.discovercars.com/?a_aid=499802" target="_blank" rel="noopener noreferrer" className={styles.cityCard}>
            🚗 Voitures
          </a>
        </div>
      </section>
    </main>
  );
}
