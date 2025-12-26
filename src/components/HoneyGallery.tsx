import React, { useState, useEffect, useRef } from "react";
import { Sparkles, X } from "lucide-react";

/* ================= IMAGES ================= */
import TulsiImg from "../images/Tulsi.png";
import ManukaImg from "../images/Manuka.png";
import EucalyptusImg from "../images/Eucalyptus.png";
import AcaciaImg from "../images/Acacia.png";
import WildflowerImg from "../images/Wildflower.png";
import CloverImg from "../images/Clover.png";

/* ================= DATA ================= */
const honeyVarieties = [
  { name: "Tulsi Honey", country: "India", img: TulsiImg },
  { name: "Manuka Honey", country: "New Zealand", img: ManukaImg },
  { name: "Eucalyptus Honey", country: "Australia", img: EucalyptusImg },
  { name: "Acacia Honey", country: "Europe", img: AcaciaImg },
  { name: "Wildflower Honey", country: "", img: WildflowerImg },
  { name: "Clover Honey", country: "USA", img: CloverImg },
];

export default function HoneyGallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const intervalRef = useRef(null);

  const cardWidth = 140;
  const gap = 20;

  const slides = [...honeyVarieties, ...honeyVarieties];

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prev) => prev + 1);
      }, 2500);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  /* ================= RESET LOOP ================= */
  useEffect(() => {
    if (slideIndex >= honeyVarieties.length) {
      setTimeout(() => {
        setSlideIndex(0);
      }, 300);
    }
  }, [slideIndex]);

  return (
    <section className="py-20 overflow-hidden bg-white">
      {/* HEADER */}
      <div className="container mx-auto px-4 mb-14 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-4">
          <Sparkles size={16} />
          Our Collection
        </span>

        <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
          Explore Our <span className="text-amber-600">Honey Varieties</span>
        </h2>

        <p className="text-gray-600 text-lg">
          Discover the rich diversity of pure honey
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-[90%] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-linear"
          style={{
            transform: `translateX(-${slideIndex * (cardWidth + gap)}px)`,
          }}
        >
          {slides.map((h, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-center cursor-pointer"
              style={{
                minWidth: `${cardWidth}px`,
                marginRight: `${gap}px`,
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              onClick={() => setLightboxImg(h)}
            >
              <img
                src={h.img}
                alt={h.name}
                className="w-full h-[180px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="text-orange-500 font-semibold text-sm mt-2">
                {h.name}
              </p>
              {h.country && (
                <p className="text-gray-900 text-xs">({h.country})</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative bg-white rounded-xl p-4 max-w-md w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE ICON */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full p-1 hover:bg-orange-600"
            >
              <X size={18} />
            </button>

            <img
              src={lightboxImg.img}
              alt={lightboxImg.name}
              className="w-full h-[260px] object-contain"
            />

            <h3 className="text-center text-lg font-semibold text-orange-600 mt-4">
              {lightboxImg.name}
            </h3>

            {lightboxImg.country && (
              <p className="text-center text-sm text-gray-600">
                {lightboxImg.country}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
