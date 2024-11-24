// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center p-3">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-dhOrange"></div>
        </div>
    );
};

export default LoadingSpinner;