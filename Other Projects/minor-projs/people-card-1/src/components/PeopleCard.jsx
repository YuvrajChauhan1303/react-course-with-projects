import React, { useState } from 'react';
import Social from './Social';

export default function PeopleCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const img = props.image;

    const handleHover = () => {
        setIsHovered(true);
        setTimeout(() => {
            setShowContent(true);
        }, 500); 
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setShowContent(true);
        }, 500); 
        setIsHovered(false);
        setShowContent(false);
    };

    return (
        <div className='w-[18rem] h-[32rem] bg-green-300 border-4 border-red-800 rounded-xl overflow-hidden'>
            <div className='' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <img className='object-cover img-container h-[32rem] w-full hover:scale-50 duration-500 hover:rounded-xl hover:translate-y-[-6vh]' src={img} alt="" />
            </div>

            {isHovered && showContent && (
                <div className='translate-y-[-20vh] flex flex-col items-center'>
                    <h3 className='text-xl'>Your Name Here</h3>
                    <Social />
                </div>
            )}
        </div>
    );
}
