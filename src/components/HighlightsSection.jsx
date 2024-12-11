import hightlightImg from "../assets/highlight-img.svg";
import { useRef, useEffect } from "react";

const HighlightsSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  const mentionRef = useRef(null);
  const pollRef = useRef(null);
  const resolveRef = useRef(null);

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
    if (mentionRef.current) observer.observe(mentionRef.current);
    if (pollRef.current) observer.observe(pollRef.current);
    if (resolveRef.current) observer.observe(resolveRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (cardRef.current) observer.unobserve(cardRef.current);
      if (mentionRef.current) observer.unobserve(mentionRef.current);
      if (pollRef.current) observer.unobserve(pollRef.current);
      if (resolveRef.current) observer.unobserve(resolveRef.current);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd h-screen py-24">
      <div className="flex flex-col max-w-[72rem] mx-auto text-[#FFFFFF]">
        <p
          ref={subtitleRef}
          className="animate-highlights text-xl font-semibold text-center"
        >
          Best time here
        </p>
        <h2
          ref={titleRef}
          className="mt-5 animate-highlights font-medium text-6xl text-center text-balance"
        >
          Better feedback at the right time.
        </h2>
        <div ref={cardRef} className="animate-highlights self-center mt-14">
          <img src={hightlightImg} />
        </div>
        <div className="flex justify-between gap-3 mt-5">
          <div
            ref={mentionRef}
            className="animate-highlights rounded-3xl bg-[#111111] p-5 py-7"
          >
            <p className="text-base font-semibold">Mentions</p>
            <p className="text-[#9D9FA1] text-base font-normal text-balance">
              Mention anyone on your team to include them in a post.
            </p>
          </div>
          <div
            ref={pollRef}
            className="animate-highlights rounded-3xl bg-[#111111] p-5 py-7"
          >
            <p className="text-base font-semibold">Polls</p>
            <p className="text-[#9D9FA1] text-base font-normal text-balance">
              Get a quick gut check from the team on design options.
            </p>
          </div>
          <div
            ref={resolveRef}
            className="animate-highlights rounded-3xl bg-[#111111] p-5 py-7"
          >
            <p className="text-base font-semibold">Resolve comments</p>
            <p className="text-[#9D9FA1] text-base font-normal text-balance">
              Mark comments as resolved to keep the conversation focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
