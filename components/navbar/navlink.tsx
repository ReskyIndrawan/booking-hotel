"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import clsx from "clsx";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <div className='flex items-center  md:order-2 gap-2 '>
          <div className='hidden md:block md:me-0 bg-white/70 hover:scale-110 hover:bg-teal-400 rounded-full p-0.5'>
            <Image
              src={session.user.image || "/avatar.svg"}
              width={40}
              height={40}
              alt='avatar'
              className='rounded-full border-0 object-cover'
            />
          </div>
          <div className='flex items-center'>
            <button
              onClick={() => signOut()}
              className='md:block hidden py-2 px-4 bg-blue-400 text-white font-semibold hover:bg-blue-500 rounded-sm cursor-pointer'>
              Sign Out
            </button>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen(!open)}
        className='inline-flex items-center p-2 justify-between text-sm text-white rounded-md md:hidden hover:bg-gray-700'>
        {!open ? (
          <IoMenu className='size-8' />
        ) : (
          <IoClose className='size-8' />
        )}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}>
        <ul className='flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-black/50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-transparent'>
          <li>
            <Link
              href='/'
              className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/room'
              className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
              Contact
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link
                  href='/myreservation'
                  className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      href='/admin/dashboard'
                      className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/admin/room'
                      className='block py-2 px-3 text-white hover:bg-teal-500 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-teal-400'>
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
          {session ? (
            <li className='pt-4 md:pt-0'>
              <button
                onClick={() => signOut()}
                className=' md:hidden py-2.5 px-4 bg-blue-500 text-white hover:bg-blue-600 rounded-sm border-1 border-black shadow-lg cursor-pointer'>
                Sign Out
              </button>
            </li>
          ) : (
            <li className='pt-4 md:pt-0'>
              <Link
                href='/signin'
                className='py-2.5 px-6 bg-teal-500 text-white hover:bg-teal-600 rounded-sm border-1 border-black shadow-lg'>
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
