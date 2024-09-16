import React, { useState } from 'react';
import Sidebar from '../Sidebar';

// Layout Component
const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
  
    return (
      <div className="relative min-h-screen">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="lg:ml-64 p-8">
          {children}
        </div>
      </div>
    );
  };

  export default Layout;




