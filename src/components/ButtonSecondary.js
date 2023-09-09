import React from 'react'

const ButtonSecondary = (props) => {
    return (
        <div className="w-[173px] h-[60px] px-12 py-[18px] rounded-xl border border-stone-800 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-xl font-heading">{props.text}</div>
        </div>
    )
}

export default ButtonSecondary