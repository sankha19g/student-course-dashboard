'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "motion/react"
import { House, BookOpen, ChartColumn, Settings, PanelLeftClose, CircleUser } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menu = [
    { name: "Home", icon: House, href: "/" },
    { name: "Courses", icon: BookOpen, href: "/courses" },
    { name: "Activity", icon: ChartColumn, href: "/activity" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <>
      <motion.nav
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:flex bg-card/50 backdrop-blur-lg border-r border-border text-white h-screen p-4 flex-col rounded-r-3xl justify-between overflow-hidden sticky top-0">

        {/* Top */}
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-slate-700 p-2 rounded cursor-pointer">
              <PanelLeftClose />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-bold text-xl whitespace-nowrap text-primary">
                  Dashboard
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Menu */}
          <ul className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <li className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'text-white' : 'text-muted hover:text-text hover:bg-slate-700/50'
                    }`}>

                    {/* Sliding active background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-slate-700 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10">
                      <Icon size={22} />
                    </span>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10 whitespace-nowrap font-medium">
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Bottom — Profile */}
        <Link href="/profile">
          <div className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${pathname === '/profile' ? 'text-white' : 'text-muted hover:text-text hover:bg-slate-700'
            }`}>
            {pathname === '/profile' && (
              <motion.div
                layoutId="activeNavBg"
                className="absolute inset-0 bg-slate-700 rounded-lg"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10"><CircleUser /></span>
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 whitespace-nowrap">
                  Profile
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </Link>
      </motion.nav>




      {/* Mobile bottom navigation */}
      <nav className='bg-slate-900 text-white md:hidden z-100 h-14 flex items-center fixed bottom-0 left-0 w-full'>
        <ul className="flex flex-row justify-around w-full">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.name}
                className={`flex items-center justify-center py-1 px-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'text-primary' : 'text-muted hover:text-white'
                  }`}>
                <Link href={item.href}>
                  <Icon size={22} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile top bar */}
      <header className='w-full fixed md:hidden flex top-0 left-0 z-10 bg-slate-900 h-14 justify-between items-center'>
        <h1 className='text-lg font-semibold px-6'>Dashboard</h1>
        <div className='px-6'>
          <Link href="/profile">
            <CircleUser />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar

