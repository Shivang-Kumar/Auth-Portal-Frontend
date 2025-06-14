import Navbar from "../component/Navabar";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Contry_Dropdown from '../component/ContryDropdown'
import GoogleLogo from "../assets/google.svg"
import Applelogo from "../assets/apple.svg"
import Emaillogo from "../assets/gmail.svg"
import Fblogo from "../assets/facebook.svg"
import { useEffect, useState } from "react";
import InputBox from "../component/InputBox";


    const Login=({phoneNo, handlePhoneChange, setStep })=>{
         const[isOpen, setIsOpen]=useState(false);
         const[showError,setShowError]=useState(false);
        const toggleDropdown=()=>{
            setIsOpen(prev => !prev);
        }

        const handleContinue =()=>{
            if(phoneNo==null || phoneNo.length<10)
            {
                setShowError(true);
            }else{
            setStep("verify_contact");
            }
        }

        useEffect(()=>{
            if(phoneNo!=null && phoneNo.length == 10)
            {
                setShowError(false);
            }},[phoneNo]
        )


        return(
            <>
            <div className="flex justify-center">
                <div className='bg-white rounded-3xl h-180 w-150 mt-20 border-1'>
                    <div className="flex justify-center mt-5  h-10  font-bold border-b">Log in Or signup</div>
                    <div className=" text-2xl ml-6 mt-8 mb-5">Welcome to Airbnb</div>
                    <div className="h-11 w-130 ml-6 border-2 rounded-t-md flex" onClick={toggleDropdown}>
                        <div className='flex text-xs absolute ml-1 '>Country/Region</div>
                        <Contry_Dropdown isOpen={isOpen} setIsOpen={setIsOpen} toggleDropdown={toggleDropdown}/>
                    </div>
                    <InputBox type="number" placeholder="Phone Number" onChange={handlePhoneChange} value={phoneNo} className="h-11 w-130 ml-6 border-2 mt-0 border-t-0 rounded-b-md flex pl-2" />
                    {showError && <div className="text-red-500 text-sm mt-2 ml-6">! Please enter phone number correctly</div>}
                    <div className="flex ml-7 text-xs">We’ll call or text you to confirm your number. Standard message and data rates apply.</div>
                    <div className="font-bold  ml-7 underline flex  text-xs">Privacy Policy</div>
                    <div className="text-white text-xl mt-5 flex justify-center pt-1.5 h-11 w-130 ml-6 border-2 rounded-2xl bg-red-600 hover:cursor-pointer" onClick={handleContinue}>Continue</div>
                    <div className="flex items-center my-4 ml-6 w-130">
                        <div className="flex-grow h-px bg-gray-300"/>
                        <span className="mx-4 text-xs whitespace-nowrap ">or</span>
                        <div className="flex-grow h-px bg-gray-300"/>
                    </div>
                    <a href="#"><div className="text-xl mt-5 flex items-center justify-between  text-center pt-1.5 h-11 w-130 ml-6 border-2 rounded-2xl"><img src={GoogleLogo} alt="google" className="h-5 w-10 pl-[25px]"/><span className="absolute left-1/2 transform -translate-x-1/2 text-md">Continue with Google</span></div></a>
                     <a href="#"><div className="text-xl mt-5 flex items-center justify-between  text-center pt-1.5 h-11 w-130 ml-6 border-2 rounded-2xl"><img src={Applelogo} alt="apple" className="h-5 w-10 pl-[25px]"/><span className="absolute left-1/2 transform -translate-x-1/2 text-md">Continue with Apple</span></div></a>
                      <a href="#"><div className="text-xl mt-5 flex items-center justify-between  text-center pt-1.5 h-11 w-130 ml-6 border-2 rounded-2xl"><img src={Emaillogo} alt="email" className="h-5 w-10 pl-[25px]"/><span className="absolute left-1/2 transform -translate-x-1/2 text-md">Continue with Email</span></div></a>
                       <a href="#"><div className="text-xl mt-5 flex items-center justify-between  text-center pt-1.5 h-11 w-130 ml-6 border-2 rounded-2xl"><img src={Fblogo} alt="facebook" className="h-5 w-10 pl-[25px]"/><span className="absolute left-1/2 transform -translate-x-1/2 text-md">Continue with Facebook</span></div></a>
                </div>
            </div>
            </>
    )
}

export default Login;