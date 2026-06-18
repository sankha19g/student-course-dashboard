'use client'
import Link from 'next/link';
import { useState } from 'react';
import CoursesPage from '../courses/page';
import ProfilePage from '../profile/page';
import { House, BookOpen, ChartColumn, Settings, PanelLeftClose, CircleUser, } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menu = [
    {
      name: "Home",
      icon: House,
      href: "/"
    },
    {
      name: "Courses",
      icon: BookOpen,
      href: "/courses"
    },
    {
      name: "Analytics",
      icon: ChartColumn,
      href: "/analytics"
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/settings"
    },
  ];

  return (
    <>
      <nav className={`hidden md:flex bg-slate-900 text-white h-screen p-4 flex-col rounded-r-3xl justify-between transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        {/* Top */}

        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-slate-700 p-2 rounded">
              <PanelLeftClose />
            </button>

            {isOpen && (
              <h1 className="font-bold text-xl">
                Dashboard
              </h1>
            )}
          </div>

          {/* Menu */}


          <ul className="space-y-4">
            {menu.map((item) => {
              const Icon = item.icon;
              const Hrefz = item.href;

              return (
                <Link to href={Hrefz}>
                  <li
                    key={item.name}
                    className=" flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
                    <Icon size={22} />

                    {isOpen && <span>{item.name}</span>}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Bottom */}

        <Link to href="/profile">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer ">
            <CircleUser />

            {isOpen && <span>Profile</span>}
          </div>
        </Link>
      </nav >


      {/* mobile bottom navigation */}
      < nav className='bg-slate-900 text-white md:hidden h-14 flex items-center fixed bottom-0 left-0 w-full' >
        <ul className="flex flex-row justify-around w-full">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}
                className="flex items-center justify-center py-1 px-3 rounded-lg hover:bg-slate-700 cursor-pointer">
                <Icon size={22} />
              </li>
            );
          })}
        </ul>
      </nav >

      <header className='w-full md-hidden fixed md:hidden flex top-0 left-0 z-10 bg-slate-900 h-14 justify-between items-center '>

        <h1 className='text-lg font-semibold px-6'>
          Dashboard
        </h1>

        <div className='px-6 '>
          <CircleUser />
        </div>
      </header>
    </>
  )
}

export default Navbar

