import progressGraph1 from "../assets/progress-graph-1.svg";
import progressGraph2 from "../assets/progress-graph-2.svg";
import { useRef, useEffect } from "react";

const ProgessArchieve = () => {
  const graphProjectRef = useRef();
  const graphProfileRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.75 }
    );

    const graphProjectEle = graphProjectRef.current;
    const graphProfileEle = graphProfileRef.current;

    if (graphProjectEle) observer.observe(graphProjectEle);
    if (graphProfileEle) observer.observe(graphProfileEle);

    return () => {
      if (graphProjectEle) observer.unobserve(graphProjectEle);
      if (graphProfileEle) observer.unobserve(graphProfileEle);
    };
  }, []);
  return (
    <section className="bg-[#111111] py-24">
      <div className="flex flex-col max-w-[72rem] mx-auto text-[#FFFFFF]">
        <h2 className="font-semibold text-6xl text-center">
          Your Archive of progress
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8">
          <div
            ref={graphProjectRef}
            className="animate-features flex flex-col items-center rounded-xl bg-[#282828] pt-6 px-5"
          >
            <p className="text-lg font-semibold">Projects</p>
            <p className="text-[#9D9FA1] text-lg font-normal text-balance">
              Organize, follow and archive.
            </p>
            <img src={progressGraph1} />
          </div>
          <div
            ref={graphProfileRef}
            className="animate-features flex flex-col items-center rounded-xl bg-[#282828] pt-6 px-5"
          >
            <p className="text-lg font-semibold">Member profiles</p>
            <p className="text-[#9D9FA1] text-lg font-normal text-balance">
              Automatic portfolios of your work.
            </p>
            <img className="mt-auto" src={progressGraph2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgessArchieve;
