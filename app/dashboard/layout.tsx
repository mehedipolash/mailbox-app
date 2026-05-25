'use client';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/auth/login');
  }, [user, loading, router]);

  if (loading) return <div className="text-white p-6">Loading...</div>;
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-slate-900">
      <DashboardSidebar user={user} />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}