export default function HowItWorksPage() {
  const steps = [
    'Sign up for free',
    'Connect your email accounts',
    'AI organizes your inbox',
    'Collaborate with your team',
  ];
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-8">How MailNest works</h1>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-center bg-slate-800/40 p-4 rounded-xl">
              <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center font-bold">{i+1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}