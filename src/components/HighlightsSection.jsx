import hightlightImg from "../assets/highlight-img.svg";

const HighlightsSection = () => {
  return (
    <section className="bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd h-screen py-24">
      <div className="flex flex-col max-w-[72rem] mx-auto text-[#FFFFFF]">
        <p className="text-xl font-semibold text-center">Best time here</p>
        <h2 className="mt-5  font-medium text-6xl text-center text-balance">
          Better feedback at the right time.
        </h2>
        <div className="self-center mt-14">
          <img src={hightlightImg} />
        </div>
        <div className="flex justify-between gap-3 mt-5">
          <div className="rounded-3xl bg-[#111111] p-5 py-7">
            <p className="text-base font-semibold">Mentions</p>
            <p className="text-[#9D9FA1] text-base font-normal text-balance">
              Mention anyone on your team to include them in a post.
            </p>
          </div>
          <div className="rounded-3xl bg-[#111111] p-5 py-7">
            <p className="text-base font-semibold">Polls</p>
            <p className="text-[#9D9FA1] text-base font-normal text-balance">
              Get a quick gut check from the team on design options.
            </p>
          </div>
          <div className="rounded-3xl bg-[#111111] p-5 py-7">
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
