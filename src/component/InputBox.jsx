const InputBox=({
    type="",
    value="",
    onClick,
    onChange,
    placeholder="",
    readOnly=false,
    className=""
})=>{

    return (
        <>
        <input type={type} placeholder={placeholder} value={value} onClick={onClick} onChange={onChange} readOnly={readOnly} className={className}/>
        </>
    );

};

export default InputBox;