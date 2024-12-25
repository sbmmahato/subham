import React from 'react';
import { Home, Code2, Cloud, BookOpen, Settings, HeadphonesIcon, LogOut } from 'lucide-react';
import UserDropdown from './UserDropdown';
import x      from '../assets/logo2.jpg'

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

function Sidebar({ mobile, onClose }: SidebarProps) {
  const mainMenuItems = [
    { icon: Home, label: 'Repositories', active: true },
    { icon: Code2, label: 'AI Code Review' },
    { icon: Cloud, label: 'Cloud Security' },
    { icon: BookOpen, label: 'How to Use' },
    { icon: Settings, label: 'Settings' },
  ];

  const bottomMenuItems = [
    { icon: HeadphonesIcon, label: 'Support' },
    { icon: LogOut, label: 'Logout' },
  ];

  const MenuItem = ({ item, onClick }: { item: typeof mainMenuItems[0], onClick?: () => void }) => (
    <a
      href="#"
      className={`flex items-center space-x-3 px-3 py-2 rounded-md ${
        item.active
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <item.icon className="h-5 w-5" />
      <span>{item.label}</span>
    </a>
  );

  return (
    <div className={`flex flex-col bg-white border-r ${mobile ? 'max-h-[85vh]' : 'h-full'}`}>
      <div className="p-4 border-b">
  {!mobile && ( // Only render the logo in non-mobile view
    <div className="flex items-center space-x-2">
      <img src={x} alt="CodeAnt AI" className="h-10 w-45" />
    </div>
  )}
  <div className="mt-2">
    <UserDropdown value="UtkarshDhairyaPanwar" />
  </div>
</div>

      <nav className="flex-1 flex flex-col justify-between p-2">
        <ul className="space-y-1">
          {mainMenuItems.map((item, index) => (
            <li key={index}>
              <MenuItem item={item} onClick={mobile ? onClose : undefined} />
            </li>
          ))}
        </ul>
        <ul className="space-y-1">
          {bottomMenuItems.map((item, index) => (
            <li key={index}>
              <MenuItem item={item} onClick={mobile ? onClose : undefined} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;