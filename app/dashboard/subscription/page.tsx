'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockApi } from '@/lib/mockApi';
import { PricingPlan } from '@/data/mockData';

export default function SubscriptionPage() {
  const { user, updateUser } = useAuth();
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockApi.getPricingPlans().then(data => {
      setPlans(data);
      setLoading(false);
    });
  }, []);

  const upgrade = async (planId: string) => {
    await mockApi.updatePlan(user!.id, planId);
    await updateUser({ plan: planId as any });
    alert(`Plan updated to ${planId}`);
  };

  if (loading) return <div className="text-white">Loading plans...</div>;

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold">Your subscription</h1>
      <div className="mt-4 p-4 bg-slate-800/40 rounded-xl">
        <p>Current plan: <span className="font-semibold text-teal-300 capitalize">{user?.plan}</span></p>
        <p>Expires: {user?.planExpiry ? new Date(user.planExpiry).toLocaleDateString() : 'N/A'}</p>
      </div>
      <h2 className="text-xl font-semibold mt-8">Upgrade options</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {plans.map(plan => (
          <div key={plan.id} className="bg-slate-800/40 rounded-xl p-4">
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <p className="text-2xl">${plan.price}<span className="text-sm">/{plan.period}</span></p>
            <button
              onClick={() => upgrade(plan.id)}
              disabled={plan.id === user?.plan}
              className="mt-4 w-full py-2 bg-teal-500 disabled:bg-gray-600 rounded-lg"
            >
              {plan.id === user?.plan ? 'Current' : 'Switch'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}