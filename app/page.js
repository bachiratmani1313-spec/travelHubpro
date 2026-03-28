"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main className="container">
      <h2>Compare Flights & Hotels</h2>

      {/* AVIASALES */}
      <div className="widget">
        <div id="aviasales-widget"></div>

        <Script
          strategy="lazyOnload"
          src="https://tp.media/content?currency=eur&locale=fr&marker=499802&trs=0&powered_by=true&searchUrl=www.aviasales.com/search&theme=dark&border_radius=10&plain=false&color_button=%23ffd700&color_icons=%23ffd700&color_background=%230a0a0a&color_text=%23ffffff&color_border=%23ffd700&promo_id=7873&campaign_id=100"
        />
      </div>

      {/* HOTELLOOK */}
      <div className="widget">
        <div id="hotellook-widget"></div>

        <Script
          strategy="lazyOnload"
          src="https://tp.media/content?currency=eur&locale=fr&marker=499802&trs=0&powered_by=true&searchUrl=search.hotellook.com&theme=dark&border_radius=10&plain=false&color_button=%23ffd700&color_icons=%23ffd700&color_background=%230a0a0a&color_text=%23ffffff&color_border=%23ffd700&promo_id=7873&campaign_id=101"
        />
      </div>

      {/* KIWI */}
      <div className="card">
        <a
          href="https://kiwi.tp.st/499802"
          target="_blank"
          style={{ color: "#ffd700" }}
        >
          ✈️ Find cheaper flights (Kiwi)
        </a>
      </div>
    </main>
  );
}
