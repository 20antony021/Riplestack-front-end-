import React from "react";

const PlatformButton = ({ name, label, avatar, activeAccount, onActiveAccount }) => {
    return (<button onClick={() => onActiveAccount(name)} className={`flex items-center p-1 md:py-2 md:px-4 ${name === activeAccount ? "border-[#FFBCAB]" : "border-[#EBEBEB]"} border hover:border-[#FFBCAB] hover:font-bold rounded-full text-[#6D6B85] hover:text-[#3B3A44] mr-3`}>
        { avatar && <span className="mr-2 hidden md:block">
            <img src={avatar} alt="social account" className="w-5 h-5" />
        </span> }
        <span className="text-md">{label}</span>
    </button>)
}

export default PlatformButton