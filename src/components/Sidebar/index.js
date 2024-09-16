import React, { useState } from 'react';
import { Menu, X, Home, Settings, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const menuItems = [
  //   { icon: Home, text: 'Home', href: '/' },
  //   { icon: User, text: 'Users', href: '/users' },
  //   { icon: Mail, text: 'Messages', href: '/messages' },
  //   { icon: Settings, text: 'Settings', href: '/settings' },
  // ];

  const menuItems = [
    { icon: Home, text: 'Home', to: '/app' },
    { icon: User, text: 'Users', to: '/app/users' },
    { icon: Mail, text: 'Messages', to: '/app/messages' },
    { icon: Settings, text: 'Settings', to: '/app/settings' },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 ${
          isOpen ? 'left-48 duration-300' : 'left-4'
        } z-20 p-2 bg-gray-800 text-white rounded-md lg:hidden`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 z-10`}
      >
        <nav className="p-4">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.href}
                  className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  <item.icon className="mr-3" size={20} />
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};


export default Sidebar;