export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-4xl mx-auto bg-slate-800/40 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
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