import logoIcon from "../assets/logo-icon.svg";

const CallToAction = () => {
  return (
    <section className="bg-[#111111] py-24">
      <div className="flex flex-col justify-center items-center gap-6 text-[#FFFFFF]">
        <img className="h-20 w-auto" src={logoIcon}></img>
        <h4 className="font-semibold text-3xl text-center">
          Increase your team’s visibility and alignment
        </h4>
        <p className="text-[#9D9FA1] text-xl font-normal text-justify">
          Start for free, flexible for all teams.
        </p>

        <div className="flex gap-4 items-center">
          <a className="font-medium" href="">
            Request a demo
          </a>
          <button className="block mx-auto text-base font-medium bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd py-3 px-6 rounded-full">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
