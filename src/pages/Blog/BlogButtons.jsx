import './BlogButtons.css';
import React, { useState } from 'react';

export function BlogButtons() {
    const [activeButton, setActiveButton] = useState('All articles');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return( 
        <div className='buttons-container'>
            <button
                className={activeButton === 'All articles' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('All articles')}
            >
                All articles
            </button>
            <button
                className={activeButton === 'Food & Drink' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('Food & Drink')}
            >
                Food & Drink
            </button>
            <button
                className={activeButton === 'Inspiration' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('Inspiration')}
            >
                Inspiration
            </button>
            <button
                className={activeButton === 'Local Guides' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('Local Guides')}
            >
                Local Guides
            </button>
            <button
                className={activeButton === 'See & Do' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('See & Do')}
            >
                See & Do
            </button>
            <button
                className={activeButton === 'Travel trips' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('Travel trips')}
            >
                Travel trips
            </button>
            <button
                className={activeButton === 'Where to say' ? 'gray-button active' : 'gray-button'}
                onClick={() => handleButtonClick('Where to say')}
            >
                Where to say
            </button>
        </div>     
    )
}