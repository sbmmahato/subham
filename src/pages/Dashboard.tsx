import React, { useState } from 'react';
import { Menu, RefreshCw, Plus, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import RepositoryList from '../components/RepositoryList';
import SearchBar from '../components/SearchBar';
import x from '../assets/logo.jpg'

function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:h-full">
        <Sidebar />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center space-x-2">
                <img src={x} alt="CodeAnt AI" className="h-10 w-45" />
                <span className="font-semibold text-lg">CodeAnt AI</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <Sidebar mobile onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img src={x} alt="CodeAnt AI" className="h-10 w-45" />
            <span className="font-semibold text-lg">CodeAnt AI</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
                <p className="text-gray-600 text-sm">33 total repositories</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 px-3 py-2 rounded-md border hover:bg-gray-50">
                  <RefreshCw className="h-4 w-4" />
                  <span>Refresh All</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  <span>Add Repository</span>
                </button>
              </div>
            </div>

            <SearchBar />

            <RepositoryList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;