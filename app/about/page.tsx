import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import HeaderSection from "@/components/header-section";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gray-900 border-b-2 border-t-2 border-teal-400/50 border-dotted'>
      <HeaderSection
        title='About Us'
        subTitle='Discover our story and commitment to providing exceptional hospitality experiences.'
      />
      <div className='max-w-screen-xl mx-auto py-16 md:py-24 px-4'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          <div className='relative'>
            <Image
              src='/about-image.jpg'
              alt='About Image'
              width={650}
              height={579}
              className='rounded-lg shadow-lg object-cover'
            />
          </div>
          <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl font-semibold text-white mb-6'>
              Who we are
            </h1>
            <p className='text-gray-300 text-lg leading-relaxed'>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maiores assumenda est ipsam sed natus vero
              deserunt, non porro provident quod. We strive to create
              unforgettable experiences for our guests.
            </p>

            <div className='space-y-8 pt-8'>
              <div className='flex gap-6'>
                <div className='flex-none mt-1'>
                  <div className='p-3 bg-teal-500/20 rounded-lg'>
                    <IoEyeOutline className='size-7 text-teal-400' />
                  </div>
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold mb-3 text-white'>
                    Our Vision
                  </h4>
                  <p className='text-gray-400 leading-relaxed'>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Consequatur error similique,
                    delectus adipisci doloremque ullam. To be the
                    leading hospitality provider in the region.
                  </p>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex-none mt-1'>
                  <div className='p-3 bg-teal-500/20 rounded-lg'>
                    <IoLocateOutline className='size-7 text-teal-400' />
                  </div>
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold mb-3 text-white'>
                    Our Mission
                  </h4>
                  <p className='text-gray-400 leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Enim corrupti saepe asperiores
                    nisi nulla reprehenderit recusandae error quos ut
                    eos! Delivering exceptional service and comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
