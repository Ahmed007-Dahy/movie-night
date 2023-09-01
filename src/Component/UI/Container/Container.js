import { useState } from 'react';

function Container(props) {
    const [isOpen, setIsOpen] = useState(true);
    const openHandler = function () {
        setIsOpen((open) => !open);
    };
    return (
        <div className="bg-primary-color h-720 overflow-y-scroll mt-4 relative rounded-2xl">
            <button
                className="absolute right-4 top-2 text-3xl text-white z-20"
                onClick={openHandler}
            >
                {isOpen ? '-' : '+'}
            </button>
            {isOpen && props.children}
        </div>
    );
}

export default Container;
