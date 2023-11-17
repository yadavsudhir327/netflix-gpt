import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm, setIsSignInForm]= useState(true);
    const toggleSignInform=()=>{
       
        setIsSignInForm(!isSignInForm);
    }
    return (
    <div>
        <Header></Header>
        <div>
              <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="cover-img"/>
        </div>


        <form className="w-3/12 absolute p-16 bg-black my-20 mx-auto right-0 left-0 text-white flex-wrap bg-opacity-75">
              <h1 className="font-bold py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
              {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2"/>}
              <input type="text" placeholder="Email Address" className="p-2 my-2"/>
              <input type="password" placeholder="Password" className="p-2 my-2"/>
              <button className="p-2 my-2 text-white text-center bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
              <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm?"New to Netflix Sign Up Now":"Already Registerd,Sign In Now"}</p>
        </form>
    </div>)
}
export default Login;