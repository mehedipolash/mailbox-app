export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-4xl mx-auto bg-slate-800/40 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: May 2025</p>
        <div className="space-y-4 text-gray-300">
          <p>By using MailNest, you agree to these terms.</p>
          <p>You are responsible for maintaining the security of your account.</p>
          <p>Subscription fees are billed in advance. No refunds for partial periods.</p>
          <p>We may terminate accounts for violation of these terms.</p>
          <p>The service is provided "as is" without warranties.</p>
        </div>
      </div>
    </div>
  );
}