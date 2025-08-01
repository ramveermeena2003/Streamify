import { useState } from 'react'
import {ShipWheelIcon} from "lucide-react"
import { Link } from 'react-router';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import useLogin from '../hooks/useLogin.js';



const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

// const queryClient = useQueryClient();

// const {mutate:loginMutation, isPending, error} = useMutation({
//   mutationFn: login,
//   onSuccess: () =>{
//     toast.success("Successfully Login !");
//     queryClient.invalidateQueries({queryKey: ["authUser"]});
//   },
//   onError: (error) =>{
//     toast.error(error.response.data.message)
//   }
// });

const {loginMutation, isPending, error} = useLogin();

const handleLogin = (e) => {
  e.preventDefault();
  loginMutation(loginData);    
  
}

const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="forest">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>

      {/* login form - left side */}

      <div className='w-full lg:w-1/2 sm:p-8 flex flex-col'>
      {/* logo */}
      <div className='mb-4 flex items-center justify-start gap-2'>
        <ShipWheelIcon className='size-9 text-primary'/>
        <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>Streamify</span>
      </div>

      {/* error message if any error */}

      {error && (
        <div className='alert alert-error mb-4'>
          <span>{error.response.data.message}</span>
        </div>
      )}

      <div className='w-full'>
        <form onSubmit={handleLogin}>
          <div className='space-y-4'>

            <div>
              <h2 className='text-xl font-semibold'>Welcome Back</h2>
              <p className='text-sm opacity-70'>Sign in to your account to continue your language journey</p>
            </div>

            <div className='space-y-3'>

              {/* email */}

              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>

                <input type="email" placeholder='example@gmail.com' className='input input-bordered w-full' value={loginData.email} onChange={(e) =>setLoginData({...loginData, email: e.target.value})} required/>
              </div>

              {/* Password */}

              {/* <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>

                <input type="password" placeholder='********' className='input input-bordered w-full' value={loginData.password} onChange={(e) =>setLoginData({...loginData, password: e.target.value})} required/>
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
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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
                  </div>

            </div>

            <button className='btn btn-primary w-full' type='submit' disabled ={isPending}>{isPending ? (
              <>
              <span className='loading loading-spinner loading-xs'></span> Signing in...
              </>
            ) : (
              "Sign In"
            )}</button>

            <div className='text-center mt-4'>
              <p className='text-sm'>Don't have an account{" "}
              <Link to="/signup" className='text-primary hover:underline'>Create one</Link>
              </p>
            </div>

          </div>
        </form>
      </div>

      </div>

      {/* login from - right side */}

      <div className='hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center'>
      <div className='max-w-md p-8'>
        {/* Illustration */}
        <div className='relative aspect-square max-w-sm mx-auto'>
          <img src= "/i.png" alt="Language connection illustration" className='w-full h-full'/>
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

export default LoginPage
