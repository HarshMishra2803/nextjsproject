"use clientf "
import { useSession, signIn, signOut } from "next-auth/react"
import React from "react";

const Login = () => {
  return (
    <div className="text-white py-14 container mx-auto">
      <h1 className="font-bold text-3xl text-center mb-10">
        Login  to get your fans to support you
      </h1>

      <div className="flex flex-col items-center gap-4 min-h-screen  p-10">
        {/* Google */}
        <button className="flex items-center text-black bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 48 48"
            version="1.1"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <path
                d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604A23.796 23.796 0 0 0 .214 24c0 3.74.868 7.261 2.407 10.389l7.905-6.051A14.65 14.65 0 0 1 9.827 24z"
                fill="#FBBC05"
              />
              <path
                d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.093L39.202 6.4C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.823-5.532 7.017-9.511 13.182-9.511z"
                fill="#EB4335"
              />
              <path
                d="M23.714 37.867c-6.165 0-11.36-3.978-13.182-9.51l-7.909 6.039C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.312-5.848l-7.507-5.804a14.68 14.68 0 0 1-7.805 2.052z"
                fill="#34A853"
              />
              <path
                d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24z"
                fill="#4285F4"
              />
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* LinkedIn */}
        <button className="flex items-center text-black bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#007EBB"
              d="M44.45 0H3.55A3.55 3.55 0 000 3.55v40.9A3.55 3.55 0 003.55 48h40.9A3.55 3.55 0 0048 44.45V3.55A3.55 3.55 0 0044.45 0zM14.12 40.54H7.94V18.09h6.18v22.45zM11.03 15.41a3.59 3.59 0 113.59-3.59 3.59 3.59 0 01-3.59 3.59zm29.51 25.13h-6.18v-11c0-2.63-.05-6.01-3.67-6.01-3.67 0-4.23 2.87-4.23 5.83v11.18h-6.18V18.09h5.93v3.06h.09a6.52 6.52 0 015.87-3.23c6.27 0 7.43 4.12 7.43 9.47v13.15z"
            />
          </svg>
          <span>Continue with LinkedIn</span>
        </button>

        {/* Twitter */}
        <button className="flex items-center text-black bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1DA1F2"
              d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm10.66 18.6c.011.24.017.48.017.723 0 7.36-5.604 15.843-15.844 15.843-3.147 0-6.074-.921-8.543-2.505a11.19 11.19 0 008.273-2.314 5.59 5.59 0 01-5.216-3.878 5.57 5.57 0 002.524-.096 5.584 5.584 0 01-4.482-5.477v-.07a5.55 5.55 0 002.529.698 5.59 5.59 0 01-1.729-7.464 15.862 15.862 0 0011.515 5.838 5.593 5.593 0 019.518-5.099 11.14 11.14 0 003.55-1.358 5.608 5.608 0 01-2.458 3.09 11.144 11.144 0 003.211-.881 11.332 11.332 0 01-2.783 2.87z"
            />
          </svg>
          <span>Continue with Twitter</span>
        </button>

        {/* Facebook */}
        <button className="flex items-center text-black bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1877F2"
              d="M24 0C10.745 0 0 10.745 0 24c0 11.986 8.744 21.887 20.16 23.752V30.938h-6.06v-6.938h6.06v-5.277c0-6.007 3.583-9.317 9.072-9.317 2.63 0 5.383.47 5.383.47v5.925h-3.035c-2.992 0-3.922 1.858-3.922 3.764v4.435h6.678l-1.066 6.938h-5.612v16.814C39.256 45.887 48 35.986 48 24 48 10.745 37.255 0 24 0z"
            />
          </svg>
          <span>Continue with Facebook</span>
        </button>

        {/* GitHub */}
        <button className="flex items-center text-black bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#000000"
              d="M24 0C10.745 0 0 10.745 0 24a24.04 24.04 0 0016.41 22.81c1.2.222 1.64-.522 1.64-1.17 0-.577-.022-2.492-.033-4.523-6.68 1.453-8.09-3.234-8.09-3.234-1.092-2.775-2.666-3.514-2.666-3.514-2.18-1.51.165-1.48.165-1.48 2.41.17 3.68 2.473 3.68 2.473 2.145 3.676 5.63 2.613 7.003 2 .218-1.554.84-2.613 1.528-3.213-5.332-.61-10.94-2.665-10.94-11.857 0-2.62.933-4.762 2.46-6.445-.247-.608-1.066-3.06.232-6.38 0 0 2.008-.652 6.58 2.46A22.78 22.78 0 0124 10.78a22.78 22.78 0 016.025.808c4.57-3.112 6.576-2.46 6.576-2.46 1.3 3.32.48 5.772.236 6.38a9.08 9.08 0 012.46 6.445c0 9.21-5.62 11.24-10.96 11.84.86.75 1.63 2.22 1.63 4.49 0 3.24-.03 5.85-.03 6.64 0 .65.43 1.4 1.65 1.16A24.04 24.04 0 0048 24C48 10.745 37.255 0 24 0z"
            />
          </svg>
          <span>Continue with GitHub</span>
        </button>

        {/* Apple */}
        <button className="flex items-center text-black bg-slate-50 border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#000000"
              d="M34.6 25.5c-.05-4.3 3.5-6.4 3.7-6.5-2-3-5.1-3.4-6.2-3.5-2.6-.3-5 1.5-6.3 1.5s-3.3-1.5-5.5-1.4c-2.8.1-5.4 1.6-6.9 4-3 5.3-.8 13 2.2 17.3 1.5 2.2 3.3 4.7 5.7 4.6 2.3-.1 3.2-1.5 6-1.5s3.6 1.5 6 1.4c2.5 0 4.1-2.2 5.6-4.4 1.7-2.4 2.4-4.7 2.4-4.8-.05-.05-4.7-1.8-4.7-7zM29.8 11.4c1.2-1.5 2-3.5 1.8-5.6-1.7.1-3.8 1.2-5 2.7-1.1 1.3-2.1 3.4-1.9 5.4 2 .2 3.9-1 5.1-2.5z"
            />
          </svg>
          <span>Continue with Apple</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
