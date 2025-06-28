import { Metadata } from "next";
import { LoginGoggleButton } from "@/components/login-button";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect_url?: string }>;
}) => {
  const params = (await searchParams)?.redirect_url;
  let redirectUrl;
  if (!params) {
    redirectUrl = "/";
  } else {
    redirectUrl = `/${params}`;
  }
  return (
    <div className='min-h-screen flex items-center bg-gray-900 pt-20'>
      <div className='bg-black/80 w-96 mx-auto rounded-sm shadow-lg border border-teal-700 p-8'>
        <h1 className='text-4xl font-bold mb-2 text-white'>
          Sign In
        </h1>
        <p className='font-medium mb-8 text-gray-400'>
          Sign in to your account to continue
        </p>
        <div className='py-4'>
          <LoginGoggleButton redirectUrl={redirectUrl} />
        </div>
        <div className='mt-6 text-center'>
          <p className='text-gray-400 text-sm'>
            Do not have an account?{" "}
            <a
              href='/signup'
              className='text-teal-400 hover:text-teal-300 font-medium'>
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
