import { Email } from '@/data/mockData';

interface MailPreviewProps {
  email: Email | null;
}

export default function MailPreview({ email }: MailPreviewProps) {
  if (!email) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select an email to read
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white">{email.subject}</h2>
      <div className="mt-2 text-sm text-gray-300">
        From: {email.from.name} &lt;{email.from.email}&gt;
      </div>
      <div
        className="mt-4 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: email.content }}
      />
      <div className="mt-4 text-xs text-gray-500">
        {new Date(email.date).toLocaleString()}
      </div>
    </div>
  );
}