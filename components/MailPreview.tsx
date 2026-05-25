// import { Email } from '@/data/mockData';

// export default function MailPreview({ email }: { email: Email | null }) {
//   if (!email) {
//     return (
//       <div className="flex items-center justify-center h-full text-gray-400">
//         Select an email to read
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-white">{email.subject}</h2>
//       <div className="mt-2 text-sm text-gray-300">
//         From: {email.from.name} &lt;{email.from.email}&gt;
//       </div>
//       <div
//         className="mt-4 prose prose-invert max-w-none"
//         dangerouslySetInnerHTML={{ __html: email.content }}
//       />
//       <div className="mt-4 text-xs text-gray-500">
//         {new Date(email.date).toLocaleString()}
//       </div>
//     </div>
//   );
// }

import { Email } from '@/data/mockData';

export default function MailPreview({ email }: { email: Email | null }) {
  if (!email) {
    return <div className="flex items-center justify-center h-full text-gray-400 font-mono">Select a transmission to decode.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white tracking-tight neon-cyan">{email.subject}</h2>
      <div className="mt-2 text-sm text-gray-300 border-b border-[#00f0ff]/20 pb-3">
        From: <span className="font-mono text-[#ff00e0]">{email.from.name}</span> &lt;{email.from.email}&gt;
      </div>
      <div
        className="mt-6 prose prose-invert prose-headings:text-white prose-a:text-[#00f0ff] max-w-none"
        dangerouslySetInnerHTML={{ __html: email.content }}
      />
      <div className="mt-6 pt-4 border-t border-[#00f0ff]/20 text-xs text-gray-500 font-mono">
        Transmission received: {new Date(email.date).toLocaleString()}
      </div>
    </div>
  );
}