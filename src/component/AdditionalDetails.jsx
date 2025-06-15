import InputBox from '../component/InputBox';
import Back from '../assets/back.svg';
import {useEffect, useState} from 'react';   



    const AddDetails=(setStep)=>{

        const [firstName,setFirstName]=useState(undefined);
        const [lastName,setlastName]=useState(undefined);
        const [date,setDate]=useState(undefined);
        const [email,setEmail]=useState(undefined);
        const [error,setError]=useState({
            eFirstName:false,
            eLastName:false,
            eDate:false,
            eEmail:false
        });    

       

        useEffect(()=>{
        setError({
            eFirstName: firstName == '',
            eLastName: lastName == '',
            eDate: date == '',
            eEmail: email == '',
        });
             },[firstName,lastName,date,email]);

        const handleAgreeAndContinue=()=>{
            let hasErrors = Object.values(error).some(err => err === true);
            if(!hasErrors)
            {
                setStep("Additional Details");
            }
            }
    

          

        return (
            <div className="flex flex-col   flex-grow w-[80vh] bg-white rounded border-[1px] p-5 ">
                    <div className="h-[10%] flex items-center "><button><img src={Back} alt="Back"  className='h-5'/></button><div className="mx-auto text-center font-bold">Finish Signing Up</div></div>
                    <div className="w-full mt-7 h-px bg-gray-300"/>
                    <div className="flex-grow  mt-5">
                        <div className='mb-2'>Legal Name</div>
                        <InputBox type="text" placeholder=" Enter First Name" className="border rounded w-full h-10" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                         { error.eFirstName && <div className="text-red-500 text-sm mb-2   ">! First Name cannot be empty</div>}
                        <InputBox type="input" placeholder=" Enter Last Name" className="border rounded w-full h-10" value={lastName} onChange={(e)=>setlastName (e.target.value)}/>
                        { error.eLastName && <div className="text-red-500 text-sm mb-2   ">! Last Name cannot be empty</div>}
                        <div className='text-xs mt-1'>Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.</div>
                        <div className='mt-5 mb-2'>Date of birth</div>
                        <InputBox type="date" placeholder=" Enter date of birth" className="border rounded w-full h-10" value={date} onChange={(e)=>setDate(e.target.value)}/>
                        { error.eDate && <div className="text-red-500 text-sm mb-2   ">! Date Cannot be empty</div>}
                        <div className='text-xs mt-1'>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</div>
                        <div className='mt-5 mb-2'>Email Info.</div>
                        <InputBox type="email" placeholder=" Email" className="border rounded w-full h-10" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        { error.eEmail && <div className="text-red-500 text-sm mb-2   ">! Email Cannot be Empty</div>}
                        <div className='text-xs mt-1'>We'll email you trip confirmations and receipts.</div>
                        <div className='mt-5 mb-5 text-xs'>By selecting Agree and continue, I agree to Airbnb’s Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</div>
                        <div className="text-white text-xl mt-5 flex  justify-center  h-11 w-full my-auto  border-2 rounded-2xl bg-red-600 hover:cursor-pointer" >Agree and Continue</div>
                        <div className="w-full mt-7 h-px bg-gray-300"/>
                    </div>
                    <div className="h-[20%]  mt-5">
                        <div className='text-xs'>Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.</div>
                        <div className='flex my-auto mt-2'><input type="checkbox"/> <span className='text-xs ml-1.5'>I don’t want to receive marketing messages from Airbnb.</span></div>
                    </div>
            </div>
        );
    }

export default AddDetails;