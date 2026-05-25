export default function HowItWorksPage() {
  const steps = [
    'Sign up for free',
    'Connect your email accounts',
    'AI organizes your inbox',
    'Collaborate with your team',
  ];
  return (
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            How MailNest works
          </span>
        </h1>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="flex gap-4 items-center bg-black/50 backdrop-blur-sm border border-yellow-500/30 p-4 rounded-xl transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]"
            >
              <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center font-bold text-black">
                {i+1}
              </span>
              <span className="text-gray-200">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}