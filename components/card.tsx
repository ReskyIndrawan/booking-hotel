import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className='bg-black/80 shadow-md rounded-sm transition duration-150 hover:shadow-lg border border-teal-700'>
      <div className='h-[260px] w-auto rounded-t-sm relative'>
        <Image
          src='/hero.jpg'
          alt='room image'
          width={384}
          height={256}
          className='w-full h-full object-cover rounded-t-sm'
        />
      </div>
      <div className='p-8'>
        <h4 className='text-2xl font-semibold text-white mb-2'>
          <Link
            href='#'
            className='hover:text-teal-400 transition duration-150'>
            Luxury Room
          </Link>
        </h4>
        <h4 className='text-2xl mb-7'>
          <span className='font-semibold text-teal-400'>
            Rp 2.100.000
          </span>
          <span className='text-gray-400 text-sm'> /Night</span>
        </h4>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-gray-200'>
            <IoPeopleOutline />
            <span>2 People</span>
          </div>
          <Link
            href='#'
            className='px-6 py-2.5 md:px-10 md:py-3 font-semibold text-white bg-teal-500 rounded-sm hover:bg-teal-400 transition duration-150'>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
