"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/avatars/aisha.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/avatars/john.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/avatars/chinonso.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Temi Adeyemi",
    role: "CEO, BrightPath Consulting",
    avatar: "/avatars/temi.jpg",
    text: "The training programs at Tobams Group are top-notch. Our team came back with new skills and renewed confidence. Strongly recommend their Corporate Training services.",
  },
];

const CARD_WIDTH = 320; // card width + gap

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Duplicate cards for infinite loop effect
  const looped = [...testimonials, ...testimonials];

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    let next = direction === "right" ? index + 1 : index - 1;

    // Silent reset to create infinite loop illusion
    if (next >= testimonials.length) {
      el.scrollTo({ left: 0, behavior: "instant" });
      next = 1;
    } else if (next < 0) {
      el.scrollTo({
        left: CARD_WIDTH * testimonials.length,
        behavior: "instant",
      });
      next = testimonials.length - 1;
    }

    setIndex(next);
    el.scrollTo({ left: next * CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-[#f9f9f9]">
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
          Testimonials
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {looped.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[380px] flex flex-col gap-4 rounded-2xl border border-gray-100 border-l-2 border-l-brand-red shadow-sm bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-foreground/60">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div> */}

        <div className="flex justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-pink-soft text-brand-red hover:bg-brand-pink-soft/80 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-pink-soft text-brand-red hover:bg-brand-pink-soft/80 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
