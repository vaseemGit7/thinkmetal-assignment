import testimonialLogo1 from "../assets/testimonial-logo-1.svg";
import testimonialLogo2 from "../assets/testimonial-logo-2.svg";
import profile1 from "../assets/profile-1.svg";
import profile2 from "../assets/profile-2.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="bg-[#111111] py-24">
      <div className="grid grid-cols-2 max-w-[72rem] gap-8 mx-auto text-[#FFFFFF]">
        <TestimonialCard
          companyLogo={testimonialLogo1}
          message={
            "Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures."
          }
          profile={profile1}
          name={"Gabriel Valdivia"}
          designation={"Principal Product Designer"}
          companyName={"Patreon"}
        />
        <TestimonialCard
          companyLogo={testimonialLogo2}
          message={
            "Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations."
          }
          profile={profile2}
          name={"Buzz Usborne"}
          designation={"Principal Designer"}
          companyName={"Buildkite"}
        />
      </div>
    </section>
  );
};

export default Testimonial;
