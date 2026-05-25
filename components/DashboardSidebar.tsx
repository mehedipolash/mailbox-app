'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiInbox, FiUser, FiCreditCard, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../app/context/AuthContext';
import { User } from '@/data/mockData';

export default function DashboardSidebar({ user }: { user: User }) {
  const path = usePathname();
  const { logout } = useAuth();

  const links = [
    { href: '/dashboard/mail', label: 'My Mail', icon: FiInbox },
    { href: '/dashboard/subscription', label: 'Subscription', icon: FiCreditCard },
    { href: '/dashboard/profile', label: 'Profile', icon: FiUser },
  ];

  return (
    <aside className="w-64 bg-slate-800/50 backdrop-blur-sm border-r border-teal-500/20 flex flex-col">
      <div className="p-5 border-b border-teal-500/20">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
          {user.avatar}
        </div>
        <h2 className="mt-3 font-semibold text-white">{user.name}</h2>
        <p className="text-sm text-teal-300 capitalize">{user.plan} plan</p>
      </div>
      <nav className="flex-1 py-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-5 py-3 text-sm transition-all ${
              path === href
                ? 'bg-teal-500/20 text-teal-300 border-r-2 border-teal-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
      <div className="p-5 border-t border-teal-500/20">
        <button onClick={logout} className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition">
          <FiLogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}