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
    { href: '/', label: 'Home', icon: FiHome },                    // ← Added Home link
    { href: '/dashboard/mail', label: 'My Mail', icon: FiInbox },
    { href: '/dashboard/subscription', label: 'Subscription', icon: FiCreditCard },
    { href: '/dashboard/profile', label: 'Profile', icon: FiUser },
  ];

  return (
    <aside className="w-64 bg-black/30 backdrop-blur-md border-r border-white/10 flex flex-col">
      <div className="p-5 border-b border-white/10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF007F] to-[#00E5FF] flex items-center justify-center text-white font-bold text-lg">
          {user.avatar}
        </div>
        <h2 className="mt-3 font-semibold text-white">{user.name}</h2>
        <p className="text-sm text-[#00E5FF] capitalize">{user.plan} plan</p>
      </div>
      <nav className="flex-1 py-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-5 py-3 text-sm transition-all ${
              path === href
                ? 'border-r-2 border-[#00E5FF] text-white bg-white/5'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>
      <div className="p-5 border-t border-white/10">
        <button onClick={logout} className="flex items-center gap-3 text-gray-400 hover:text-[#FF007F] transition">
          <FiLogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}