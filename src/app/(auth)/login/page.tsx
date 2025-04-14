"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@/context"; 
import { useRouter } from "next/navigation"; 

export default function Login() {
  const router = useRouter();
  const { login, loading } = useUser(); 
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      login({
        email: formData.email,
        password: formData.password,
      });
      setTimeout(() => {
        const user = JSON.parse(localStorage.getItem('user') || 'null');        
        if (user) {
          switch(user.role) {
            case 'admin':
              router.push('/dashboard/admin');
              break;
            case 'cleaner':
              router.push('/dashboard/cleaner');
              break;
            case 'client':
              router.push('/dashboard/client');
              break;
            default:
              router.push('/');
          }
        } else {
          setError("Invalid email or password");
        }
      }, 100);
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center flex-col md:flex-row justify-center w-full h-screen">
      <div className="w-[60%] hidden md:block h-full">
        <Image
          src={"/heroBg.png"}
          width={1200}
          height={1200}
          alt="Hero"
          className="transform -scale-x-100 h-full object-cover object-right"
        />
      </div>

      <Image
        src={"/Logo.png"}
        width={200}
        height={200}
        alt="Hero"
        className="md:hidden my-20 "
      />

      <div className="flex-grow w-full md:w-[30%] md:py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto md:px-12 px-4 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold md:mb-12 mb-6">Log in to your Account</h2>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="flex flex-col items-start gap-4">
                    <label htmlFor="email" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-grow border border-gray-300 rounded-md p-2 bg-gray-100 w-full focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <label htmlFor="password" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
                      Password :
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="flex-grow border border-gray-300 rounded-md p-2 bg-gray-100 w-full focus:outline-none "
                      required
                    />
                  </div>

                  <div className="w-full mt-8">
                    <button
                      type="submit"
                      className="px-12 py-3 rounded-md bg-primary font-bold text-white w-full text-lg shadow-md"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>

                    <h1 className="text-center text-gray-600 mt-2">OR</h1>

                    <button
                      type="button" // Changed to type="button" since this is not a form submit action
                      className="px-12 py-3 rounded-md bg-black font-bold text-white w-full text-lg shadow-md"
                    >
                      Login with Google
                    </button>
                  </div>

                  <p className="text-lg text-gray-600 mt-2">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="primary font-bold">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
              
              <div className="mt-8 p-4 bg-gray-100 rounded-md">
                <h3 className="font-bold mb-2">Test Accounts:</h3>
                <ul className="text-sm space-y-1">
                  <li>Admin: admin@gmail.com / admin</li>
                  <li>Client: client@gmail.com / client</li>
                  <li>Cleaner: cleaner@gmail.com / cleaner</li>
                </ul>
              </div>
                 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}








// "use client"

// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// export default function Login() {

//     const [formData, setFormData] = useState({
//         password: "",
//         email: "",
//       })
    
//       const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target
//         setFormData((prev) => ({
//           ...prev,
//           [name]: value,
//         }))
//       }
    
//       const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         console.log("Form submitted:", formData)
//       }

//   return (
//     <div className="flex items-center flex-col md:flex-row justify-center w-full h-screen">
        
//         <div className="w-[60%] hidden md:block h-full">
//         <Image
//         src={"/heroBg.png"}
//         width={1200}
//         height={1200}
//         alt="Hero"
//         objectPosition="left"
//         className="transform -scale-x-100 h-full object-cover object-right"
//         />
//         </div>

//         <Image
//         src={"/Logo.png"}
//         width={200}
//         height={200}
//         alt="Hero"
//         className="md:hidden my-20 "
//         />

// <div className="flex-grow w-full md:w-[30%] md:py-8">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto md:px-12 px-4 overflow-hidden">
//             <div className="p-6 md:p-8">
//               <h2 className="text-2xl font-bold md:mb-12 mb-6">Log in to your Account</h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-6">
//                   {/* Email */}
//                   <div className="flex flex-col items-start gap-4">
//                     <label htmlFor="email" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
//                       Email :
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       placeholder="Enter your email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="flex-grow border border-gray-300 rounded-md p-2 bg-gray-100 w-full focus:outline-none"
//                       required
//                     />
//                   </div>
//                   <div className="flex flex-col items-start gap-4">
//                     <label htmlFor="password" className="text-gray-800 font-medium w-40 mb-2 md:mb-0">
//                       Password :
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       className="flex-grow border border-gray-300 rounded-md p-2 bg-gray-100 w-full focus:outline-none "
//                       required
//                     />
//                   </div>

//                                     {/* Submit Button */}
//                                     <div className="w-full mt-8">
//                     <button
//                       type="submit"
//                       className="px-12 py-3 rounded-md bg-primary font-bold text-white w-full text-lg shadow-md"
//                     >
//                       Login
//                     </button>

//                     <h1 className="text-center text-gray-600 mt-2">OR</h1>

//                     <button
//                       type="submit"
//                       className="px-12 py-3 rounded-md bg-black font-bold text-white w-full text-lg shadow-md"
//                     >
//                       Login with Google
//                     </button>

//                   </div>

//                     <p className="text-lg text-gray-600 mt-2"> Don&apos;t have an account? <Link href="/signup" className="primary font-bold">Register</Link></p>

//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         </div>
//     </div>
//   )
// }
