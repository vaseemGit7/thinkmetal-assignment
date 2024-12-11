import vector from "../assets/hero-visuals/vector.svg";
import frame from "../assets/hero-visuals/frame.svg";

const HeroSection = () => {
  return (
    <section className="bg-[#111111] h-screen">
      <div className="flex flex-col text-[#FFFFFF] pt-16 mx-auto max-w-[100rem] ">
        <h1 className="font-medium text-8xl text-center text-balance">
          Create, inspect, and apply synthetic surveillance broadly.
        </h1>
        <p className="mt-5 text-[#9D9FA1] text-xl font-normal text-center">
          Start with a stunning homepage. Stay motivated without hurting your
          pocket.
        </p>
        <button className="mt-5 block mx-auto text-base font-medium bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd py-3 px-6 rounded-full">
          Start for free
        </button>
        <div className="flex self-center mt-5 text-[#9D9FA1] text-sm">
          <p>Want to talk or get a live demo?</p>
          <a href="" className="ml-1 font-semibold">
            Get in touch
          </a>
        </div>
        <div className="relative -top-24">
          <img className="absolute -top-72 right-20" src={vector}></img>
          <img className="absolute top-[-21rem] left-40" src={frame}></img>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
