export const metadata = {
  title: "Vrax Voyage",
  description: "Compare flights, hotels and travel deals worldwide"
};

export default function RootLayouimport "./globals.css";

export const metadata = {
  title: "Vrax Voyage",
  description: "Comparateur vols, hôtels, activités et voitures"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="main">
          <header className="header">
            <h1>VRAX VOYAGE</h1>
          </header>

          {children}

          <footer className="footer">
            <p>© 2026 vrax-voyage.com</p>
          </footer>
        </div>
      </body>
    </html>
  );
}t({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="main">
          <header className="header">
            <h1>VRAX VOYAGE</h1>
          </header>

          {children}

          <footer className="footer">
            <p>© 2026 vrax-voyage.com</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
