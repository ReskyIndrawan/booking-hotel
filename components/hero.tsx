import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='relative h-screen text-white overflow-hidden'>
      <div className='absolute inset-0'>
        <Image
          src='/hero1.png'
          alt='hero image'
          fill
          className='object-cover object-top w-full h-full'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      {/* Pindahkan elemen-elemen ini ke dalam div ini */}
      <div className='relative flex flex-col justify-center items-center h-full text-center'>
        <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-3 capitalize'>
          Book your luxury room
        </h1>
        <p className='text-lg md:text-xl text-gray-300 mb-8'>
          Get Special offer just for you today.
        </p>
        <div className='flex gap-5'>
          <Link
            href='/room'
            className='bg-teal-400 rounded-md text-white hover:bg-teal-500 py-2.5 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg'>
            Book Now
          </Link>
          <Link
            href='/contact'
            className='bg-transparent rounded-md border-2 border-teal-500 text-white hover:bg-teal-500 py-2.5 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
