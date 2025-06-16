import logo from '../assets/logo.svg';
const AgreeAndContinue=({setStep})=>{
const handleAgree=()=>{
    //setState();
}

const handleDisagree=()=>{
    setStep('login');
}

    return(
        <>
        <div className="flex flex-col  border rounded p-6  w-[60vh] ">
            <div><img src={logo} alt="logo" /></div>
            <div className='text-xs font-medium mt-4'>Our Community commitment</div>
            <div className='font-bold text-2xl mt-2'>AirBnb is a community where anyone can belong</div>
            <div className='mt-2'>To ensure this, we are asking you to commit to the following:</div>
            <div className='mt-2'>I agree to treat everyone in Airbnb community-regardless of their race religion,national origin or ethnicity,disability, sex gender identity-with respect without judgement or bias. </div>
            <div className="text-white text-xl mt-5 flex  justify-center  h-11 w-full my-auto  border-2 rounded-2xl bg-red-600 hover:cursor-pointer" >Agree and Continue</div>
            <div className="text-black text-xl mt-5 flex  justify-center  h-11 w-full my-auto  border-2 rounded-2xl bg-white hover:cursor-pointer" onClick={handleDisagree}>Decline</div>
        </div>
        </>
    );
}
export default AgreeAndContinue;