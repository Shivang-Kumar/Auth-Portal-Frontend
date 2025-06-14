import Back from '../assets/back.svg'
import { useState } from 'react';
import InputBox from './InputBox';
const VerifyNumber=({phone})=>{

    const [otp, setOtp] = useState("");
    const [check , setCheck]=useState(true);

    const handleOtpChange=(event)=>{
        if(event.target.value.length<=6)
        {
            setOtp(event.target.value);
            setCheck(true);
        }
        if(event.target.value.length==6)
        {
            setCheck(false);
        }
    }


return(
    <>
        <div className="flex flex-col h-80 w-120 border rounded-2xl items-center bg-white justify-center min-h-[50vh] ">
            <div className="shadow w-full h-full max-h-[70px] items-center grid grid-cols-[1fr_2fr_1fr]">
                <img src={Back} alt="Back" className='h-5 pl-2.5 ml-3 shrink-0' />
                <div className='font-bold text-center'>Confirm your number</div>
                <div></div>
                </div>
            <div className="shadow w-full h-full">
                <div className='flex ml-6 mt-6'>Enter the code we've sent via SMS to {phone}:</div>
                <InputBox type="tel" placeholder="Enter Otp" className="rounded ml-7 mt-6 border-2 h-12 pl-6 w-40 font-mono tracking-widest " onChange={handleOtpChange} value={otp}/>
            </div>
            <div className="shadow w-full h-25 flex items-center justify-between">
                <div className='underline ml-6 hover:shadow-sm hover:rounded hover:bg-gray-200  hover:h-8 hover:w-45 hover:cursor-pointer'><a href="#" className='font-bold w-full h-full'>Choose different option</a></div>
                <button type="submit" disabled={check} className={` border rounded text-center  h-8 w-25 mr-6  ${check ? 'bg-gray-300  text-white cursor-not-allowed': 'bg-orange-600 hover:bg-orange-700 cursor-pointer text-white' }`}>Continue</button>
            </div>
        </div>
    </>
);
}

export default VerifyNumber;