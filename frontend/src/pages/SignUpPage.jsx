import React from 'react'
import { useState } from 'react'
import { ShipWheelIcon } from "lucide-react"
import { Link } from 'react-router';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import useSignUp from '../hooks/useSignUp';

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // const queryClient = useQueryClient();

  // const { mutate: signupMutation, isPending, error } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  const {signupMutation, isPending, error} = useSignUp();

  const handleSingup = (e) => {
    e.preventDefault();
    signupMutation(signupData);

  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="forest">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>

        {/* signup form - left side */}

        <div className='w-full lg:w-1/2 sm:p-8 flex flex-col'>
          {/* logo */}
          <div className='mb-4 flex items-center justify-start gap-2'>
            <ShipWheelIcon className='size-9 text-primary' />
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>Streamify</span>
          </div>

          {/* error message if any error */}

          {error && (
            <div className='alert alert-error mb-4'>
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className='w-full'>
            <form onSubmit={handleSingup}>
              <div className='space-y-4'>

                <div>
                  <h2 className='text-xl font-semibold'>Create an Account</h2>
                  <p className='text-sm opacity-70'>Join Streamify and start your language learning adventure!</p>
                </div>

                <div className='space-y-3'>

                  {/* fullName */}

                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>

                    <input type="text" placeholder='Ramveer Meena' className='input input-bordered w-full' value={signupData.fullName} onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })} required />
                  </div>

                  {/* email */}

                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>

                    <input type="email" placeholder='example@gmail.com' className='input input-bordered w-full' value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} required />
                  </div>

                  {/* Password */}

                  {/* <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>

                <input type="password" placeholder='********' className='input input-bordered w-full' value={signupData.password} onChange={(e) =>setSignupData({...signupData, password: e.target.value})} required/>
                <p className='text-xs opacity-70 mt-1'>password must be at least 6 character long</p>
              </div> */}

                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>

                    <div className='relative'>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder='********'
                        className='input input-bordered w-full pr-10'
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        required
                      />

                      <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword((showPassword)=> !showPassword)}
                      >
                        {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                      </button>
                    </div>

                    <p className='text-xs opacity-70 mt-1'>Password must be at least 6 characters long</p>
                  </div>

                  <div className='form-control'>
                    <label className='label cursor-pointer justify-start gap-2'>
                      <input type="checkbox" className='checkbox checkbox-sm' required />
                      <span className='text-xs leading-tight'>I agree to the {" "}
                        <span className='text-primary hover:underline'>terms of service</span> and {" "}
                        <span className='text-primary hover:underline'>privacy policy</span>
                      </span>
                    </label>
                  </div>
                </div>

                <button className='btn btn-primary w-full' type='submit'>{isPending ? (
                  <>
                    <span className='loading loading-spinner loading-xs'></span> Loading...
                  </>
                ) : (
                  "Create Account"
                )}</button>

                <div className='text-center mt-4'>
                  <p className='text-sm'>Already have an account ?{" "}
                    <Link to="/login" className='text-primary hover:underline'>Sign in</Link>
                  </p>
                </div>

              </div>
            </form>
          </div>

        </div>

        {/* Sign from - right side */}

        <div className='hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center'>
          <div className='max-w-md p-8'>
            {/* Illustration */}
            <div className='relative aspect-square max-w-sm mx-auto'>
              <img src="/i.png" alt="Language connection illustration" className='w-full h-full' />
            </div>

            <div className='text-center space-y-3 mt-6'>
              <h2 className='text-xl font-semibold'>Connect with language partners worldwide</h2>
              <p className='opacity-70'>Practice conversations, make friends, and improve your language skills together</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUpPage
