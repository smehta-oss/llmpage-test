import React, { useState } from "react";
import { App } from "./App";
import { PetInsurancePage2 } from "./screens/PetInsurancePage2/PetInsurancePage2";

export const AppWithPages = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<'page1' | 'page2'>('page1');

  return (
    <div className="min-h-screen bg-white">
      {/* Simple page switcher - you can replace this with proper routing */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setCurrentPage('page1')}
          className={`px-4 py-2 rounded ${
            currentPage === 'page1' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Page 1
        </button>
        <button
          onClick={() => setCurrentPage('page2')}
          className={`px-4 py-2 rounded ${
            currentPage === 'page2' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Page 2
        </button>
      </div>

      {/* Render the selected page */}
      {currentPage === 'page1' ? <App /> : <PetInsurancePage2 />}
    </div>
  );
};
