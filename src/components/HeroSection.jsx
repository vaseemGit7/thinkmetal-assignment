import icon1 from "../assets/hero-visuals/icon-1.svg";
import icon2 from "../assets/hero-visuals/icon-2.svg";
import icon3 from "../assets/hero-visuals/icon-3.svg";
import icon4 from "../assets/hero-visuals/icon-4.svg";
import icon5 from "../assets/hero-visuals/icon-5.svg";
import icon6 from "../assets/hero-visuals/icon-6.svg";
import logoIcon from "../assets/logo-icon.svg";
import vectorLeft from "../assets/hero-visuals/Vector1.svg";
import vectorRight from "../assets/hero-visuals/Vector2.svg";

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
        <div className="relative -top-20">
          <img className="absolute -top-64 left-4" src={vectorLeft}></img>
          <img className="absolute -top-64 right-4" src={vectorRight}></img>
          <img className="absolute top-36 right-[47%]" src={logoIcon}></img>
          <img className="absolute left-14 top-10" src={icon1}></img>
          <img className="absolute left-96 top-40" src={icon2}></img>
          <img className="absolute top-80" src={icon3}></img>
          <img className="absolute right-36 top-32" src={icon4}></img>
          <img className="absolute right-52 top-72" src={icon5}></img>
          <img className="absolute right-0" src={icon6}></img>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
