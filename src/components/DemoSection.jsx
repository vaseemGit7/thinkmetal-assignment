import demoImg from "../assets/demo-img.svg";

const DemoSection = () => {
  return (
    <section className="bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd  pt-24">
      <div className="flex flex-col max-w-[90rem] mx-auto text-[#FFFFFF]">
        <h2 className="font-medium text-6xl text-center text-balance">
          Keep every one in the loop
        </h2>
        <p className="mt-5 max-w-md text-xl font-normal text-center mx-auto">
          All good things starts with a homepage. Get inspired without breaking
          your wallet.
        </p>
        <button className="mt-5 block mx-auto text-base font-semibold bg-[#FFFFFF] text-[#111111] py-4 px-6 rounded-full">
          Start for free
        </button>
        <div className="self-center mt-5"></div>
        <img src={demoImg} />
      </div>
    </section>
  );
};

export default DemoSection;
