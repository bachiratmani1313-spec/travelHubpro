"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main className="container">
      <h2>Compare Flights, Hotels & Travel Deals</h2>

      {/* AVIASALES */}
      <div className="widget">
        <Script
          strategy="lazyOnload"
          src="https://tp.media/content?currency=eur&locale=fr&marker=499802&trs=0&powered_by=true&searchUrl=www.aviasales.com/search&theme=dark&border_radius=10&plain=false&color_button=%23ffd700&color_icons=%23ffd700&color_background=%230a0a0a&color_text=%23ffffff&color_border=%23ffd700&promo_id=7873&campaign_id=100"
        />
      </div>

      {/* HOTELLOOK */}
      <div className="widget">
        <Script
          strategy="lazyOnload"
          src="https://tp.media/content?currency=eur&locale=fr&marker=499802&trs=0&powered_by=true&searchUrl=search.hotellook.com&theme=dark&border_radius=10&plain=false&color_button=%23ffd700&color_icons=%23ffd700&color_background=%230a0a0a&color_text=%23ffffff&color_border=%23ffd700&promo_id=7873&campaign_id=101"
        />
      </div>

      {/* KIWI */}
      <div className="card">
        <a href="https://kiwi.tp.st/499802" target="_blank">
          ✈️ Find cheaper flights (Kiwi)
        </a>
      </div>

      {/* TIQETS */}
      <div className="card">
        <a
          href="https://www.tiqets.com/en/?partner=499802"
          target="_blank"
        >
          🎟️ Book tours & attractions (Tiqets)
        </a>
      </div>

      {/* DISCOVERCARS */}
      <div className="card">
        <a
          href="https://www.discovercars.com/?a_aid=499802"
          target="_blank"
        >
          🚗 Rent a car worldwide (DiscoverCars)
        </a>
      </div>
    </main>
  );
}
