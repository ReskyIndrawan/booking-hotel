import { FaGoogle } from "react-icons/fa6";

export const LoginGoggleButton = () => {
  return (
    <button className='flex items-center justify-center gap-3 w-full bg-teal-500 text-white font-semibold py-3 px-6 text-base rounded-sm hover:bg-teal-600 transition duration-150 shadow-md hover:shadow-lg'>
      <FaGoogle className='size-5' />
      Sign In With Google
    </button>
  );
};
