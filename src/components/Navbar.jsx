import React from 'react'
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  HelpCircle,
  Search,
  Shield,
  ChevronDown
} from 'lucide-react'

export const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section - Logo & Title */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Deepfake<span className="text-blue-600">AI</span>
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden md:block">
                  Media Authenticity Platform
                </p>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block ml-10">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-64 lg:w-80 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Search scans, files, or reports..."
                />
              </div>
            </div>
          </div>

          {/* Right Section - Actions & User Menu */}
          <div className="flex items-center space-x-4">
           

            {/* Help Button - Desktop */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden lg:inline">Help</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Notifications Dropdown */}
              <div className="hidden absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">Notifications</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      3 new
                    </span>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {/* Notification Items */}
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Scan Complete</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Video_001.mp4 - Authentic</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-red-100 dark:bg-red-900 p-2">
                        <svg className="w-4 h-4 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Fake Detected</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Audio_file.wav - Deepfake Alert</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    View all notifications
                  </button>
                </div>
              </div>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors">
                <div className="relative">
                  <img
                    className="h-8 w-8 rounded-full border-2 border-blue-500"
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                    alt="User avatar"
                  />
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Alex Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500 hidden lg:block" />
              </button>
              
              {/* User Dropdown Menu */}
              <div className="hidden absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full border-2 border-blue-500"
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                        alt="User avatar"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Alex Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">alex@email.com</p>
                      <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Premium
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <User className="h-4 w-4" />
                    My Profile
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </a>
                </div>
                
                <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Usage</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-300">Storage</span>
                        <span className="font-medium">1.2GB / 5GB</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-1.5 rounded-full w-1/4"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Scans</span>
                        <span className="font-medium">42 / 100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="bg-green-600 h-1.5 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-2 border-t border-gray-200 dark:border-gray-700">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20">
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-3 mb-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  )
}