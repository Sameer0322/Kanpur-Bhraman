import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-400"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading Kanpur Bhraman...</p>
      </div>
    </div>
  );
};

export default Spinner; 