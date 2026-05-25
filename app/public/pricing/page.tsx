'use client';
import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockApi';
import { PricingPlan } from '@/data/mockData';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    mockApi.getPricingPlans().then(setPlans);
  }, []);

  const handleSubscribe = (planId: string) => {
    if (!user) router.push('/auth/signup?redirect=pricing');
    else alert(`Upgrade to ${planId} – demo payment.`);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-4">Simple, transparent pricing</h1>
        <p className="text-center text-gray-300 mb-12">No hidden fees. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div key={plan.id} className={`bg-slate-800/40 backdrop-blur rounded-2xl p-6 border ${plan.popular ? 'border-teal-400 shadow-lg' : 'border-teal-500/20'}`}>
              {plan.popular && <span className="text-teal-300 text-sm font-semibold">🔥 Most popular</span>}
              <h3 className="text-2xl font-bold text-white mt-2">{plan.name}</h3>
              <div className="mt-4"><span className="text-4xl font-bold text-white">${plan.price}</span><span className="text-gray-400">/{plan.period}</span></div>
              <ul className="mt-6 space-y-2 text-gray-300">
                {plan.features.map((feat, i) => <li key={i}>✓ {feat}</li>)}
              </ul>
              <button onClick={() => handleSubscribe(plan.id)} className="mt-8 w-full py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-semibold transition">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}