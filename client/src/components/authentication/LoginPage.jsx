import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';
import axios from 'axios'
import { toast } from 'react-toastify';
import MyContext from '../../context/MyContext';


const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const {isLogin, setIsLogin} = useContext(MyContext)

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const location = useLocation();
  const section = location.state?.section;

  const handleClose = () => {
    navigate(-1);
  };

  const form = useForm();
const { register, control, handleSubmit, formState: { errors }, getValues } = form;

const onSubmit = async (data) => {
  const formData = isSignUp
    ? { password: data.password, email: data.email, phone: data.phone, username: data.username, confirmPassword: data.confirmPassword }
    : { password: data.password, email: data.email, phone: data.phone };

  const url = isSignUp
    ? 'http://localhost:3000/user/signup'
    : 'http://localhost:3000/user/signin';

  try {
    console.log('form submitted', formData);

    const result = await axios.post(url, formData);

    console.log(result);
    if (!isSignUp) {
      // If it is sign-in, navigate to home page after successful login
      setIsLogin(!isLogin)
      navigate('/');
    } else {
      // Toggle the isSignUp state and navigate to login page after sign-up
      setIsSignUp(!isSignUp);
      navigate('/login');
    }
    form.reset(); // Reset the form after successful submission
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      toast(err.response.data.message); // Show actual error message
    } else {
      toast("An unexpected error occurred. Please try again");
    }
    console.error('Error during submission', err);
  }
};

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <div className="w-full max-w-lg p-10 rounded-lg shadow-lg bg-white relative">
          <button className="absolute top-4 right-4 text-2xl" onClick={handleClose}>
            X
          </button>

          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>

          <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Show Phone Field if SignUp is true or section is 'phone' */}
            {(isSignUp || section === 'phone') && (
              <div className="mb-6">
                {/* <label htmlFor="phone" className="block text-gray-600 mb-1">
                  Phone
                </label> */}
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('phone', {
                    required: { value: true, message: "Phone is required" },
                    validate: { isValidatePhone: (val) => { const regex = /^[0-9]{10}$/; return regex.test(val) || "Enter a valid phone" } }
                  })}
                />
                {errors.phone && <p className='err-msg'>{errors.phone.message}</p>}
              </div>
            )}

            {isSignUp && (
              <div className="mb-6">
                {/* <label htmlFor="username" className="block text-gray-600 mb-1">
                  Username
                </label> */}
                <input
                  type="text"
                  placeholder="Your username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('username', {
                    required: { value: true, message: 'Username is required' },
                    validate: { isValidateUser: (val) => { const regex = /^[A-Za-z0-9]{3,}$/; return regex.test(val) || "Enter a valid username" } }
                  })}
                />
                {errors.username && <p className='err-msg'>{errors.username.message}</p>}
              </div>
            )}

            {(section !== 'phone' || isSignUp) && (
              <>
                <div className="mb-6">
                  {/* <label htmlFor="email" className="block text-gray-600 mb-1">
                    Email
                  </label> */}
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register('email', {
                      required: { value: true, message: 'Email is required' },
                      validate: { isValidateEmail: (val) => { const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; return regex.test(val) || 'Enter a valid Email' } }
                    })}
                  />
                  {errors.email && <p className='err-msg'>{errors.email.message}</p>}
                </div>

                <div className="mb-6">
                  {/* <label htmlFor="password" className="block text-gray-600 mb-1">
                    Password
                  </label> */}
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register('password', {
                      required: { value: true, message: "Password is required" },
                      validate: { isValidatePassword: (val) => { const regex = /^(?=.*\d).{6,}$/; return regex.test(val) || "Enter a valid password" } }
                    })}
                  />
                  {errors.password && <p className='err-msg'>{errors.password.message}</p>}
                </div>
              </>
            )}

            {isSignUp && (
              <div className="mb-6">
                {/* <label htmlFor="confirm-password" className="block text-gray-600 mb-1">
                  Confirm Password
                </label> */}
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('confirmPassword', {
                    required: { value: true, message: 'Password confirmation is required' },
                    validate: { isPasswordMatch: (val) => { val === getValues('password') || "Password do not match" } }
                  })}
                />
                {errors.confirmPassword && <p className='err-msg'>{errors.confirmPassword.message}</p>}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <DevTool control={control} />
          <p className="text-center mt-6 text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={toggleForm} className="text-blue-500 cursor-pointer hover:underline">
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
