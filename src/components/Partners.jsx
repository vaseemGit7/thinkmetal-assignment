import airbusLogo from "../assets/partner-logos/partner-airbus-logo.svg";
import autotraderLogo from "../assets/partner-logos/partner-autotrader-logo.svg";
import cathaypacificLogo from "../assets/partner-logos/partner-cathaypacific-logo.svg";
import crowdstrikeLogo from "../assets/partner-logos/partner-crowdstrike-logo.svg";
import haysLogo from "../assets/partner-logos/partner-hays-logo.svg";
import liquidwebLogo from "../assets/partner-logos/partner-liquidweb-logo.svg";
import medwingLogo from "../assets/partner-logos/partner-medwing-logo.svg";
import sentryLogo from "../assets/partner-logos/partner-sentry-logo.svg";

const Partners = () => {
  return (
    <section className="bg-[#111111]">
      <div className="text-[#FFFFFF] max-w-[90rem] mx-auto py-24">
        <h2 className="text-5xl mb-24 font-semibold text-center">
          Loved By Designers At
        </h2>
        <div className="mt-7 flex justify-between">
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={crowdstrikeLogo}
            alt=""
          />
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={airbusLogo}
            alt=""
          />
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={haysLogo}
            alt=""
          />
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={sentryLogo}
            alt=""
          />
        </div>
        <div className="mt-9 flex justify-between">
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={medwingLogo}
            alt=""
          />
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={cathaypacificLogo}
            alt=""
          />
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={liquidwebLogo}
            alt=""
          />
          <img
            className="bg-[#282828] rounded-3xl px-7 py-2"
            src={autotraderLogo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Partners;
