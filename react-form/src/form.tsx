import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
  username: string;
  email: string;
  password: string;
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
    };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
             {...register("username", { required: "Username is required" })}
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            <input
            {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            <input
            {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
             {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
