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
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Simple, transparent pricing
          </span>
        </h1>
        <p className="text-center text-gray-300 mb-12">No hidden fees. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`bg-black/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] ${
                plan.popular 
                  ? 'border-yellow-500 shadow-lg' 
                  : 'border-yellow-500/30'
              }`}
            >
              {plan.popular && (
                <span className="text-yellow-400 text-sm font-semibold">🔥 Most popular</span>
              )}
              <h3 className="text-2xl font-bold text-white mt-2">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleSubscribe(plan.id)} 
                className="btn-inferno w-full mt-8 text-center"
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}