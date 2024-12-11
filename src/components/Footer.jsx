import logoIcon from "../assets/logo-icon.svg";

const Footer = () => {
  return (
    <div className="bg-neutral-950 py-24">
      <footer className="max-w-[110rem] mx-auto py-4 text-[#FFFFFF]">
        <div className="flex justify-between max-w-screen-lg">
          <img className="h-16 w-auto" src={logoIcon}></img>
          <div className="flex flex-col gap-6">
            <p className="text-base font-semibold">Product</p>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Features
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Pricing
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Changelog
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Support
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base font-semibold">Legal</p>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Terms of Privacy
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Privacy Policy
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Security
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base font-semibold">Company</p>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Blog
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <p href="" className="text-base font-semibold">
              Social
            </p>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Dribble
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Behance
            </a>
            <a href="" className="text-[#9D9FA1] text-base font-normal">
              Discord
            </a>
          </div>
        </div>
        <p className="mt-14 text-center">
          All rights reserved.© 2024 ThinkMetal
        </p>
      </footer>
    </div>
  );
};

export default Footer;
