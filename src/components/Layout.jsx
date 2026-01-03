import React, { useState } from 'react';
import AppSidebar from './Sidebar';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 1. Sidebar - Fixed on the left */}
      <AppSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* 2. Main Content - The margin pushes everything to the right */}
      <main 
        className={`flex-1 transition-all duration-300 min-w-0 ${
          isCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Render the page content here */}
        {children}
        <Toaster richColors position="top-right" />
      </main>
    </div>
  );
}