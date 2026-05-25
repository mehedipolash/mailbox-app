'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiInbox, FiUser, FiCreditCard, FiLogOut, FiHome } from 'react-icons/fi';
import { useAuth } from '../app/context/AuthContext';
import { User } from '@/data/mockData';

export default function DashboardSidebar({ user }: { user: User }) {
  const path = usePathname();
  const { logout } = useAuth();

  const links = [
    { href: '/', label: 'Home', icon: FiHome },
    { href: '/dashboard/mail', label: 'My Mail', icon: FiInbox },
    { href: '/dashboard/subscription', label: 'Subscription', icon: FiCreditCard },
    { href: '/dashboard/profile', label: 'Profile', icon: FiUser },
  ];

  return (
    <aside className="w-64 bg-black/80 backdrop-blur-lg border-r border-yellow-500/30 flex flex-col shadow-2xl">
      <div className="p-5 border-b border-yellow-500/20">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-yellow-500/20">
          {user.avatar}
        </div>
        <h2 className="mt-3 font-bold text-white tracking-wide">{user.name}</h2>
        <p className="text-sm text-yellow-400 capitalize">{user.plan} plan</p>
      </div>
      <nav className="flex-1 py-6">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-5 py-3 mx-2 rounded-lg text-sm transition-all duration-200 ${
              path === href
                ? 'bg-yellow-500/10 text-yellow-400 border-r-2 border-yellow-400 shadow-[inset_0_0_8px_rgba(234,179,8,0.2)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
      <div className="p-5 border-t border-yellow-500/20">
        <button onClick={logout} className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-all duration-200 w-full">
          <FiLogOut size={18} /> Disconnect
        </button>
      </div>
    </aside>
  );
}