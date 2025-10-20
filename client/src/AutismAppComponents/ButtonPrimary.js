import React from 'react';

const ButtonPrimary = (props) => {
    return (
        <div className="relative w-fit mt-[-1.00px] text-[20px] whitespace-nowrap">
            <div className="relative bg-gradient-to-r from-[#12e0b7ab] to-[#0d2cf48a] text-white border-2 border-[#12e0b77a] hover:transform hover:scale-105 hover:rotate-1 hover:shadow-lg transition duration-300 ease-in-out px-[24px] py-[18px] rounded-md">
                <div className='flex'>
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default ButtonPrimary;
