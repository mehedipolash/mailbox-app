import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900/70 border-t border-teal-500/20 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-400">
        <div>
          <h3 className="text-teal-400 font-semibold mb-2">MailNest</h3>
          <p>Clean, intelligent email management.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-300 mb-2">Product</h4>
          <ul>
            <li><Link href="/public/pricing">Pricing</Link></li>
            <li><Link href="/public/how-it-works">How it works</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-300 mb-2">Company</h4>
          <ul>
            <li><Link href="/public/contact">Contact</Link></li>
            <li><Link href="/public/terms">Terms</Link></li>
            <li><Link href="/public/privacy-policy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-300 mb-2">Legal</h4>
          <p>© 2025 MailNest, Inc.</p>
        </div>
      </div>
    </footer>
  );
}