import React from 'react';
import { CartContext } from '../../App';

const Counter = () => {
    const { decrementCounter, incrementCounter, counter } = React.useContext(CartContext);
    
    return (
        <div className="counter">
            <button className={`${counter <= 1 ? 'counter-button disabled' : 'counter-button'}`}
            onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            decrementCounter()}}>
                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.49997 1.51563H0.499969C0.22403 1.51563 0 1.2916 0 1.01566C0 0.739625 0.22403 0.515594 0.499969 0.515594H9.49997C9.776 0.515594 10 0.739625 10 1.01566C10 1.2916 9.776 1.51563 9.49997 1.51563Z" fill="white"/>
                </svg>
            </button>
            <span id="count">{counter}</span>
            <button 
							className={`${counter >= 99 ? 'counter-button disabled' : 'counter-button'}`}
							onClick={
							event => {
							event.preventDefault();
							event.stopPropagation();
							incrementCounter()}}
						>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16663 4.5H5.16669V0.499969C5.16669 0.22403 4.94266 0 4.66663 0C4.39069 0 4.16666 0.22403 4.16666 0.499969V4.5H0.166626C-0.109314 4.5 -0.333344 4.72403 -0.333344 4.99997C-0.333344 5.276 -0.109314 5.50003 0.166626 5.50003H4.16666V9.49997C4.16666 9.776 4.39069 10 4.66663 10C4.94266 10 5.16669 9.776 5.16669 9.49997V5.50003H9.16663C9.44266 5.50003 9.66669 5.276 9.66669 4.99997C9.66669 4.72403 9.44266 4.5 9.16663 4.5Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}

export default Counter;