import React, { useState } from 'react';
import './AccordionItem.css';

function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={toggleAccordion}>
                {title}
                <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

export default AccordionItem;
