"use client";
import { useEffect } from "react";

/** Adds `is-visible` to `.reveal` elements as they scroll into view. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    // Show anything already on screen (e.g. after an anchor jump) before arming the animation
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
    });
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
