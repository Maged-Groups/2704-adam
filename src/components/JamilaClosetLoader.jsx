import React from 'react';
import { FaHeart } from 'react-icons/fa';

const JamilaClosetLoader = () => {
    return (
        <div className="fixed inset-0 bg-pink-800/90 flex flex-col items-center justify-center z-50">
            {/* Animated heart logo */}
            <div className="relative">
                <FaHeart className="text-6xl text-pink-500 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-4 border-pink-200 border-t-pink-500 animate-spin"></div>
            </div>

            {/* Brand name with loading text */}
            <div className="mt-6 text-center">
                <h2 className="text-3xl font-bold text-pink-600 mb-2">Jamila Closet</h2>
                <p className="text-pink-500">Loading your fashion journey...</p>
            </div>

            {/* Progress indicator */}
            <div className="w-48 h-1.5 bg-pink-100 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-pink-500 rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
            </div>
        </div>
    );
};

export default JamilaClosetLoader;