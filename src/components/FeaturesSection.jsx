import codeFeatures from "../assets/code-features.svg";
import feedbackFeatures from "../assets/feedback-features.svg";

const FeaturesSection = () => {
  return (
    <section className="bg-[#111111]">
      <div className="grid grid-cols-2 gap-20 text-[#FFFFFF] max-w-[110rem] mx-auto py-28">
        <div className="self-center">
          <button className="px-[0.88rem] font-semibold py-1 text-sm rounded-2xl bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd">
            Share
          </button>
          <h2 className="mt-6 font-semibold text-6xl ">
            Share anything you’re working on.
          </h2>
          <p className="mt-6 text-[#9D9FA1] text-xl font-normal text-justify">
            Campsite has been instrumental in keeping designers aware of each
            others' work-in-progress in a way that was previously slowing us
            down. It's also one of the only channels where.
          </p>
          <div className="mt-6 flex gap-6">
            <p className="text-lg font-normal">Coded</p>
            <p className="text-lg font-normal">100% Secure</p>
          </div>
          <p className="mt-6 text-lg font-semibold">See how it works</p>
        </div>
        <div className="bg-[#282828] rounded-3xl flex items-center justify-center">
          <img src={codeFeatures} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 text-[#FFFFFF] max-w-[110rem] mx-auto py-28">
        <div className="bg-[#282828] rounded-3xl flex items-center justify-center">
          <img src={feedbackFeatures} />
        </div>
        <div className="self-center">
          <button className="px-[0.88rem] py-1 font-semibold text-sm rounded-2xl bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd">
            Feedback
          </button>
          <h2 className="mt-6 font-semibold text-6xl ">
            Better feedback at the right time.{" "}
          </h2>
          <p className="mt-6 text-[#9D9FA1] text-xl font-normal text-justify">
            Campsite has been instrumental in keeping designers aware of each
            others' work-in-progress in a way that was previously slowing us
            down. It's also one of the only channels where.
          </p>
          <p className="mt-6 text-lg font-semibold">See how it works</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;