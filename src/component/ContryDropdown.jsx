import React , {useState, useRef, useEffect} from 'react';
import InputBox from './InputBox';

const Contry_Dropdown=({isOpen,setIsOpen,toggleDropdown})=>{
    const options=['+91 (India)', '+1 (America)', '+15 (Canada)'];
    const[selected, setSelected]=useState(options[0]);
    const dropdownRef=useRef(null);
 


    const handleSelect=(value)=>{
        setSelected(value);
        setIsOpen=false;
    }

    //close dropdown if clicked outside
        useEffect(()=>{
        const handleClickOutside=(event)=>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
              setIsOpen(false);
            }
        };
        document.addEventListener('mousedown',handleClickOutside);
        return () =>{
            document.removeEventListener('mousedown',handleClickOutside);
        }
    }, []);


    return(
<>
        <div className=' mt-4 ' ref={dropdownRef}>
            <InputBox type='text'  value={selected} onClick={toggleDropdown} readOnly={true} className='border-none rounded-md w-30 bg-amber-100'/>
            {isOpen && (         
            <div>  
                <ul className="text-xs mt-2.5 border-2 rounded-md   absolute z-50 bg-white shadow-md">
                    {options.filter(option => option!==selected).map((option,index)=>{
                        return(
                            <li key={index} className=''>
                            <button type="button" className="text-xs border-none  w-129 h-10" onClick={()=>{handleSelect(option)}}>
                                {option}
                            </button>
                            </li>
                    )})}
                </ul>
            </div>
        )}
        </div>
</>
);

};

export default Contry_Dropdown;