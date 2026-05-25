'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../app/context/AuthContext';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { user, logout } = useAuth();
  const path = usePathname();
  const isDashboard = path.startsWith('/dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  if (isDashboard) return null;

  const links = [
    { href: '/', label: 'Home' },
    { href: '/public/pricing', label: 'Pricing' },
    { href: '/public/how-it-works', label: 'How it works' },
    { href: '/public/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0C10]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold neon-text">
            MailNest
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-[#00E5FF] transition">
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link href="/dashboard/mail" className="text-gray-300 hover:text-[#00E5FF] transition">Dashboard</Link>
                <button onClick={logout} className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-300 hover:text-[#00E5FF] transition">Login</Link>
                <Link href="/auth/signup" className="btn-primary">
                  Sign up
                </Link>
              </>
            )}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            {links.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-gray-300">
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link href="/dashboard/mail" className="block text-gray-300">Dashboard</Link>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="block w-full text-left text-gray-300">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="block text-gray-300">Login</Link>
                <Link href="/auth/signup" className="block btn-primary text-center">Sign up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}