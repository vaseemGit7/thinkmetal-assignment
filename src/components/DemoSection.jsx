import demoImg from "../assets/demo-img.svg";
import { useRef, useEffect } from "react";

const DemoSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.style.animationDelay = `${index * 0.7}s`;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (cardRef.current) observer.observe(cardRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (cardRef.current) observer.unobserve(cardRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd  pt-24">
      <div className="flex flex-col max-w-[90rem] mx-auto text-[#FFFFFF]">
        <h2
          ref={titleRef}
          className="animate-highlights font-medium text-6xl text-center text-balance"
        >
          Keep every one in the loop
        </h2>
        <p
          ref={subtitleRef}
          className="animate-highlights mt-5 max-w-md text-xl font-normal text-center mx-auto"
        >
          All good things starts with a homepage. Get inspired without breaking
          your wallet.
        </p>
        <button
          ref={buttonRef}
          className="animate-highlights mt-5 block mx-auto text-base font-semibold bg-[#FFFFFF] text-[#111111] py-4 px-6 rounded-full"
        >
          Start for free
        </button>
        <img ref={cardRef} className="animate-highlights mt-5" src={demoImg} />
      </div>
    </section>
  );
};

export default DemoSection;
