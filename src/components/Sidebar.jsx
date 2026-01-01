import React, { useState } from 'react';
import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem, Button } from 'flowbite-react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Upload,
  FileText,
  BarChart,
  Settings,
  LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';

// AppSidebar.jsx
export default function AppSidebar({ isCollapsed, setIsCollapsed }) {
  const customTheme = {
    root: {
      inner: "h-full overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800 flex flex-col"
    }
  };

  return (
    <div className="h-screen fixed top-0 left-0 z-50 shadow-lg">
      <Sidebar theme={customTheme} collapsed={isCollapsed} className="transition-all duration-300">
        <div className="flex items-center justify-center mb-6">
          <Button
            size="xs"
            color="light"
            onClick={() => setIsCollapsed(!isCollapsed)} // Uses the parent's function
            className="focus:ring-0 border-none hover:bg-gray-100"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>

        <SidebarItems className="flex-1 flex flex-col justify-between">
          <SidebarItemGroup>
            {/* Use 'as={Link}' and 'to="..."' directly on the SidebarItem */}
            <SidebarItem as={Link} to="/" icon={Home}>
              Home
            </SidebarItem>

            <SidebarItem as={Link} to="/upload" icon={Upload}>
              Upload & Detect
            </SidebarItem>

            <SidebarItem as={Link} to="/reports" icon={FileText}>
              Reports
            </SidebarItem>

            <SidebarItem as={Link} to="/analytics" icon={BarChart}>
              Analytics
            </SidebarItem>

            <SidebarItem as={Link} to="/settings" icon={Settings}>
              Settings
            </SidebarItem>
          </SidebarItemGroup>

          <SidebarItemGroup className="border-t border-gray-200 dark:border-gray-700">
            {/* Logout usually doesn't need a Link, just an onClick */}
            <SidebarItem icon={LogOut} className="cursor-pointer" onClick={() => console.log('Logout logic')}>
              Logout
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}