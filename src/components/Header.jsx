import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" bg-neutral-950 py-2">
      <header className="max-w-[110rem] mx-auto py-4">
        <nav className="flex items-center font-medium text-[#FFFFFF]">
          <div className="mr-16">
            <img src={logo}></img>
          </div>
          <ul className="flex gap-8 ">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
          </ul>
          <ul className="ml-auto flex gap-6 items-center">
            <li>
              <a href="">Login</a>
            </li>
            <button className="bg-gradient-to-r from-orangeGradientStart to-orangeGradientEnd py-[0.6rem] px-5 rounded-full">
              Start for free
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
