import React, { useState } from 'react'

const Accordion = ({accordionTitle , accordionDesc}) => {
    const [accordioOpen , setAccordionOpen] = useState(false);

    return(
        <div className='p-5 px-10  border-2 border-solid border-[#CAFFAE] rounded-lg'>
            <button className='flex justify-between w-full' onClick={()=> setAccordionOpen(!accordioOpen)}>
                <span className='text-lg text-start'>{accordionTitle}</span>
                {accordioOpen ? (<span className='text-2xl'>-</span>) : (<span className='text-2xl'>+</span>)}

            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
            ${accordioOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>{accordionDesc}</div>
            </div>
        </div>
    )
}

export default Accordion
