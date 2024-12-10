const TestimonialCard = ({
  companyLogo,
  message,
  profile,
  name,
  designation,
  companyName,
}) => {
  return (
    <div className="text-[#FFFFFF] p-6 ">
      <img src={companyLogo} />
      <p className="mt-7 text-lg font-normal text-pretty">{message}</p>
      <div className="mt-7 flex gap-3 items-center">
        <div>
          <img className="rounded-full" src={profile}></img>
        </div>
        <div>
          <p className="text-base font-semibold">{name}</p>
          <p className="text-[#9D9FA1] text-base font-normal">
            {designation}, {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
