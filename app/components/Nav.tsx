import { ReactNode } from 'react';
import Link from "next/link";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const Nav = ({ children }: Props) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Navbar */}
        <div className="flex justify-between w-full navbar bg-neutral">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-neutral-content"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="px-2 mx-2">
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={60}
              height={60}
            ></Image>
          </div>
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal space-x-10">
              {/* Navbar menu content here */}
              <li>
                <Link className="text-neutral-content" href={"/"}>
                  Maid
                </Link>
              </li>
              {/* <li>
                <a className="text-neutral-content">Top-up</a>
              </li> */}
              <li>
                <Link className="text-neutral-content" href={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={"/profile.png"}
                  alt="profile"
                  width={50}
                  height={50}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-focus rounded-box w-52"
            >
              <li>
                <a className="text-neutral-content justify-center">Profile</a>
              </li>
              <li>
                <a className="text-neutral-content justify-center">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full space-y-10 bg-neutral">
          {/* Sidebar content here */}
          <li>
            <a className="mb-10 justify-center">
              <Image
                src={"/profile.png"}
                alt="profile"
                width={100}
                height={100}
              />
            </a>
          </li>
          <li>
            <Link
              className="text-lg text-neutral-content justify-center"
              href={"/"}
            >
              Maid
            </Link>
          </li>
          {/* <li>
            <a className="text-lg text-neutral-content justify-center">
              Top-up
            </a>
          </li> */}
          <li>
            <Link className="text-lg text-neutral-content justify-center" href={'/about'}>About</Link>
          </li>
        </ul>
        <div className="w-60 mb-10 self-end text-center">
          <button className="w-40 btn btn-accent">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
