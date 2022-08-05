import { RiMailOpenFill } from "react-icons/ri";
import Button from "./Button";

const Navbar = () => {
  const navItems = ["Rent", "Buy", "Sell", "Manage Property", "Resources"];
  return (
    <>
      <nav className="flex items-center justify-between bg-primary-white p-4 px-5">
        <div className="flex gap-9">
          {/* LOGO */}
          <div className="flex items-center">
            <RiMailOpenFill className="fill-primary-purple h-6 w-6 mr-1" />
            <span>
              <strong>Estatery</strong>
            </span>
          </div>

          {/* List */}
          <ul className="flex gap-6">
            {navItems.map((name) => {
              return (
                <li
                  key={name}
                  className="pt-1 pb-[5px] px-3 cursor-pointer  hover:bg-light-purple hover:text-primary-purple transition duration-300 ease-out hover:ease-in"
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-2">
          <Button>Login</Button>
          <Button fillBackground>Sign up</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
