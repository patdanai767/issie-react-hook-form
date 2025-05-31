import { useState } from "react";
import {
  Coins,
  Menu,
  Plus,
  User,
  X,
  UserPen,
  MessageCircle,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-brown text-orange font-montserrat w-full flex items-center justify-between p-2 px-7 sm:p-3 sm:px-7">
      <div className="flex items-center gap-8">
        <a
          href="/"
          className="group flex items-center text-lg font-bold cursor-pointer hover:text-yellow transition duration-200 ease-in-out"
        >
          React-Form-Hook
        </a>
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <a
            href="/chart"
            className="cursor-pointer hover:text-yellow transition duration-200 ease-in-out"
          >
            Charts
          </a>
          <a
            href="/marketplace"
            className="cursor-pointer hover:text-yellow transition duration-200 ease-in-out"
          >
            Marketplace
          </a>
        </div>
      </div>
      <div>
        <div className="sm:flex hidden items-center gap-4">
          <a className="cursor-pointer p-2 hover:text-yellow hover:bg-orange/20 rounded-full transition duration-200 ease-in-out">
            <MessageCircle />
          </a>
          <a
            href="/profile"
            className="flex items-center gap-2 border-2 rounded-xl cursor-pointer px-4 py-1 hover:text-yellow hover:border-yellow transition duration-200 ease-in-out"
          >
            <UserPen />
            <div className="font-semibold ">Profile</div>
          </a>
        </div>
        <div
          onClick={toggleMenu}
          className="flex sm:hidden cursor-pointer hover:text-yellow hover:border-yellow transition duration-200 ease-in-out"
        >
          <Menu />
        </div>
      </div>

      {/* sidebar overlay */}
      <div
        onClick={toggleMenu}
        className={`fixed top-0 right-0 w-screen h-screen bg-black/15  z-40 transition ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* sidebar menu */}
      <div
        className={`fixed top-0 right-0 w-60 h-screen p-7 bg-brown text-orange text-xl font-semibold z-50 transform transition-transform duration-200 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <a href="/login" className="flex items-center gap-2 cursor-pointer">
              <User className="bg-yellow rounded-sm p-1" />
              <p>Profile</p>
            </a>
            <div
              onClick={toggleMenu}
              className="flex items-center cursor-pointer"
            >
              <X className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-orange/20" />
            </div>
          </div>
          <div className="border-b-2 border-orange pb-7">
            <a
              href="/token"
              className="mt-5 px-2 py-2 flex justify-between gap-2 text-orange rounded-lg border-2 border-orange hover:border-yellow hover:text-yellow transition cursor-pointer"
            >
              <div className="flex gap-2">
                <Coins className="" />
                100,000
              </div>
              <div className="flex items-center cursor-pointer">
                <Plus className="w-full h-full rounded-xl hover:bg-yellow" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <a
            href="/search"
            className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-orange/20
            "
          >
            Search
          </a>
          <a
            href="/account"
            className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-orange/20
            "
          >
            Account
          </a>
          <a
            className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-orange/20
          "
            href="/messenger"
          >
            Messages
          </a>
          <a className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-orange/20">
            Marketplace
          </a>
          <a className="w-full h-full mt-4 mb-4 p-2 rounded-xl cursor-pointer hover:bg-orange/20">
            Charts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
