export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]">
        <h1 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: May 2025</p>
        <div className="space-y-4 text-gray-300">
          <p>We collect information you provide directly to us, such as your name, email, and payment details.</p>
          <p>We use your data to provide, maintain, and improve our services, and to communicate with you.</p>
          <p>We implement security measures to protect your data. We never sell your personal information.</p>
          <p>For any questions, contact privacy@mailnest.com.</p>
        </div>
      </div>
    </div>
  );
}