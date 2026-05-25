// app/page.tsx (Home page)
import Link from 'next/link';
import { FiZap, FiShield, FiGlobe, FiStar } from 'react-icons/fi';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <section className="relative overflow-hidden py-24 px-4 text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
            MailNest
          </h1>
          <p className="text-xl text-gray-300 mt-4">The smartest inbox for modern teams.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/auth/signup" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-semibold transition">
              Start free trial
            </Link>
            <Link href="/public/how-it-works" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-200 transition">
              See how it works
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why choose MailNest?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FiZap, title: 'Lightning fast', desc: 'Instant search and real‑time sync.' },
            { icon: FiShield, title: 'Bank‑level security', desc: 'End‑to‑end encryption.' },
            { icon: FiGlobe, title: 'Global infrastructure', desc: '99.99% uptime SLA.' },
            { icon: FiStar, title: 'AI priority inbox', desc: 'Focus on what matters.' },
          ].map((feat, i) => (
            <div key={i} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/20 text-center">
              <feat.icon className="w-10 h-10 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">{feat.title}</h3>
              <p className="text-gray-400 mt-2">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}