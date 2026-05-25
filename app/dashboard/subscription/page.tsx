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

  if (loading) return <div className="text-yellow-400">Loading plans...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          Your subscription
        </span>
      </h1>
      <div className="mt-4 p-4 bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl">
        <p className="text-gray-300">
          Current plan:{' '}
          <span className="font-semibold text-yellow-400 capitalize">{user?.plan}</span>
        </p>
        <p className="text-gray-300 mt-1">
          Expires:{' '}
          {user?.planExpiry ? new Date(user.planExpiry).toLocaleDateString() : 'N/A'}
        </p>
      </div>
      <h2 className="text-xl font-semibold mt-8 text-gray-200">Upgrade options</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {plans.map(plan => (
          <div
            key={plan.id}
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]"
          >
            <h3 className="text-lg font-bold text-white">{plan.name}</h3>
            <p className="text-2xl text-white">
              ${plan.price}
              <span className="text-sm text-gray-400">/{plan.period}</span>
            </p>
            <button
              onClick={() => upgrade(plan.id)}
              disabled={plan.id === user?.plan}
              className={`mt-4 w-full py-2 rounded-lg font-semibold transition ${
                plan.id === user?.plan
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'btn-inferno'
              }`}
            >
              {plan.id === user?.plan ? 'Current' : 'Switch'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}