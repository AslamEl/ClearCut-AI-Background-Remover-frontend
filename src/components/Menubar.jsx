import {useContext, useState} from "react";
import {assets} from "../assets/assets.js";
import { Link } from "react-router-dom";
import { Menu,X } from "lucide-react";
import { SignedIn, SignedOut, SignIn, useAuth, useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext.jsx";

const Menubar=()=>{

    const [menuOpen,setMenuOpen]=useState(false);
    const {openSignIn,openSignUp}=useClerk();
    const {user} = useUser();
    const {getToken} = useAuth();
    const {credit}=useContext(AppContext);



    const openRegister=()=>{
        setMenuOpen(false);
        openSignUp({});


    }

    const openLogin=()=>{
        setMenuOpen(false);
        openSignIn({});

    }

    return (
        <nav className="bg-white px-8 py-4 flex justify-between items-center">
            {/* left side logo and text*/}
             <Link className="flex items-center space-x-2" to="/">
                <img src={assets.logo} alt="logo" className="h-8 w-8 object-contain cursor-pointer"/>
                <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                Clear<span className="text-gray-400 cursor-pointer">Cut</span>

                </span>

            </Link>
            {/* Right side Action button */}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button className="text-gray-700 font-medium cursor-pointer
                                    hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                                    hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={openLogin}>
                    Login
                </button>
                <button className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-150 ease-in-out" onClick={openRegister}>
                    Sign up
                </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 
                                            transition-all duration-500 cursor-pointer">
                        <img src={assets.dollar} alt="credits" height={24} width={24}/>
                         <p className="text-xs sm:text-sm font-medium text-gray-600">
                             Credits: {credit}
                         </p>
                         </button>
                         
                         <p className="text-gray-600 max-sm:hidden">
                            Hi, {user?.fullName}
                         </p>
                    </div>
                    <UserButton/>
                </SignedIn>
            </div>
            {/*mobile hamburger*/}
            <div className="flex md:hidden">
                <button onClick={()=>setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} />:<Menu size={28}/> }
                </button>

            </div>
            {/*mobile menu*/}
            {
                menuOpen && (
                    <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">
                    <SignedOut>
                        <button className="text-gray-700 hover:text-blue-500 font-medium"
                        onClick={openLogin}>
                            Login</button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center"
                        onClick={openRegister}>
                        Signup</button>
                    </SignedOut>

                    <SignedIn>
                        <div className="flex items-center gap-2 sm:gap-3">
                        <button className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 sm:py-2.5 rounded-full hover:scale-105 
                                            transition-all duration-500 cursor-pointer">
                        <img src={assets.dollar} alt="credits" height={24} width={24}/>
                         <p className="text-xs sm:text-sm font-medium text-gray-600">
                             Credits: {credit}
                         </p>
                         </button>
                        
                        </div>
                        <UserButton/>
                    </SignedIn>
                    </div>

            )}
            
        </nav>
    )
}
export default Menubar;