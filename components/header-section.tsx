import Image from "next/image";

const HeaderSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header className='relative h-80 text-white overflow-hidden mt-20'>
      <div className='absolute inset-0'>
        <Image
          src='/about-us.png'
          alt='Header Image'
          fill
          className='object-cover object-center w-full h-full'
        />
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <div className='relative flex flex-col items-center justify-center h-full text-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight capitalize mb-3'>
          {title}
        </h1>
        <p className='text-lg md:text-xl text-gray-300 max-w-2xl'>
          {subTitle}
        </p>
      </div>
    </header>
  );
};

export default HeaderSection;
