import { useState } from "react";
import Navbar from "../component/Navabar";
import Footer from "../component/footer";
import Login from "./Login";
import VerifyNumber from "../component/VerifuNumber";

const AuthWrapper=()=>{
    const[phoneNo, setPhoneNo]=useState();
    const[step, setStep]=useState("login");




     const handlePhoneChange=((event)=>{
            if(event.target.value.length<=10){
            setPhoneNo(event.target.value);
            }
         });



         return (<>
         <div className="flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-grow mx-auto mt-25 mb-20">{
            step === 'login'? (
                <Login phoneNo={phoneNo} handlePhoneChange={handlePhoneChange} setStep={setStep} />
            ) : (
                <VerifyNumber phone={phoneNo}/>
            ) 

          }
        </div>
          <Footer />
          </div>
         </>
         );


}

export default AuthWrapper;