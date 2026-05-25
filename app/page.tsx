// 'use client';

// import Link from 'next/link';
// import { FiZap, FiShield, FiGlobe, FiStar } from 'react-icons/fi';
// import dynamic from 'next/dynamic';

// const LottieHero = dynamic(() => import('@/components/lottieHero'), {
//   ssr: false,
//   loading: () => <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-black/40 rounded-2xl animate-pulse" />,
// });

// export default function HomePage() {
//   return (
//     <div className="bg-black">
//       {/* Hero Section - Carbon Inferno */}
//       <section className="relative overflow-hidden px-4 py-16 md:py-24">
//         {/* Background glow – red/yellow */}
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
//         <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-yellow-500 blur-[120px] opacity-20 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-red-600 blur-[140px] opacity-20 rounded-full animate-pulse delay-700"></div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Column */}
//             <div className="text-center md:text-left space-y-6">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
//                 <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-300 bg-clip-text text-transparent">
//                   MailNest
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
//                 The smartest inbox for modern teams. AI‑powered organization, real‑time sync, and bank‑level security.
//               </p>
//               <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
//                 <Link
//                   href="/auth/signup"
//                   className="btn-inferno inline-block text-center min-w-[160px]"
//                 >
//                   Start free trial
//                 </Link>
//                 <Link
//                   href="/public/how-it-works"
//                   className="px-5 py-2 rounded-lg border border-yellow-500/60 text-gray-200 hover:bg-yellow-500/10 hover:border-yellow-400 transition text-center min-w-[140px]"
//                 >
//                   How it works
//                 </Link>
//               </div>
//               <div className="flex items-center gap-4 text-sm text-gray-400 justify-center md:justify-start pt-4">
//                 <span className="flex items-center gap-1 text-yellow-400">🔥 No credit card required</span>
//                 <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
//                 <span className="flex items-center gap-1">⚡ 14‑day free trial</span>
//               </div>
//             </div>

//             {/* Right Column: Lottie with fiery glow */}
//             <div className="flex justify-center relative">
//               <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-30 rounded-full scale-110"></div>
//               <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 rounded-full scale-125"></div>
//               <div className="relative w-64 h-64 md:w-80 md:h-80">
//                 <LottieHero />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-white mb-12">
//           <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
//             Why choose MailNest?
//           </span>
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: FiZap, title: 'Lightning fast', desc: 'Instant search and real‑time sync.' },
//             { icon: FiShield, title: 'Bank‑level security', desc: 'End‑to‑end encryption.' },
//             { icon: FiGlobe, title: 'Global infrastructure', desc: '99.99% uptime SLA.' },
//             { icon: FiStar, title: 'AI priority inbox', desc: 'Focus on what matters.' },
//           ].map((feat, i) => (
//             <div key={i} className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
//               <feat.icon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-white">{feat.title}</h3>
//               <p className="text-gray-400 mt-2">{feat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import Link from 'next/link';
import { FiZap, FiShield, FiGlobe, FiStar } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const LottieHero = dynamic(() => import('@/components/lottieHero'), {
  ssr: false,
  loading: () => <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-black/40 rounded-2xl animate-pulse" />,
});

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero Section - Carbon Inferno (clean, no pulsing blobs) */}
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        {/* Optional: very subtle static grid overlay (no animation) */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-300 bg-clip-text text-transparent">
                  MailNest
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
                The smartest inbox for modern teams. AI‑powered organization, real‑time sync, and bank‑level security.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link
                  href="/auth/signup"
                  className="btn-inferno inline-block text-center min-w-[160px]"
                >
                  Start free trial
                </Link>
                <Link
                  href="/public/how-it-works"
                  className="px-5 py-2 rounded-lg border border-yellow-500/60 text-gray-200 hover:bg-yellow-500/10 hover:border-yellow-400 transition text-center min-w-[140px]"
                >
                  How it works
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 justify-center md:justify-start pt-4">
                <span className="flex items-center gap-1 text-yellow-400">🔥 No credit card required</span>
                <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                <span className="flex items-center gap-1">⚡ 14‑day free trial</span>
              </div>
            </div>

            {/* Right Column: Lottie with a static, non-animated subtle glow (optional) */}
            <div className="flex justify-center relative">
              {/* Static soft glow – no animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full scale-110 blur-2xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <LottieHero />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Why choose MailNest?
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FiZap, title: 'Lightning fast', desc: 'Instant search and real‑time sync.' },
            { icon: FiShield, title: 'Bank‑level security', desc: 'End‑to‑end encryption.' },
            { icon: FiGlobe, title: 'Global infrastructure', desc: '99.99% uptime SLA.' },
            { icon: FiStar, title: 'AI priority inbox', desc: 'Focus on what matters.' },
          ].map((feat, i) => (
            <div key={i} className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <feat.icon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">{feat.title}</h3>
              <p className="text-gray-400 mt-2">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}