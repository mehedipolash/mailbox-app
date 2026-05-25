'use client';
import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockApi';
import { Email } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { FiStar } from 'react-icons/fi';
import MailPreview from '@/components/MailPreview';

export default function MailPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selected, setSelected] = useState<Email | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockApi.getEmails().then(data => {
      setEmails(data);
      if (data.length) setSelected(data[0]);
      setLoading(false);
    });
  }, []);

  const handleSelect = async (email: Email) => {
    setSelected(email);
    if (!email.read) {
      await mockApi.markAsRead(email.id);
      setEmails(prev => prev.map(e => e.id === email.id ? { ...e, read: true } : e));
    }
  };

  const toggleStar = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    await mockApi.toggleStar(id);
    setEmails(prev => prev.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, starred: !prev.starred } : null);
  };

  if (loading) return <div className="text-white p-6">Loading messages...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-120px)] text-white">
      {/* Email list */}
      <div className="w-full md:w-96 bg-black/30 rounded-xl overflow-y-auto p-2 space-y-2">
        {emails.map(email => (
          <div
            key={email.id}
            onClick={() => handleSelect(email)}
            className={`p-3 rounded-lg cursor-pointer transition ${
              selected?.id === email.id
                ? 'bg-teal-500/20 border-l-4 border-teal-400'
                : 'hover:bg-slate-700/50'
            }`}
          >
            <div className="flex justify-between">
              <span className="font-semibold">{email.from.name}</span>
              <button onClick={e => toggleStar(email.id, e)}>
                <FiStar className={email.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'} />
              </button>
            </div>
            <div className="text-sm font-medium">{email.subject}</div>
            <div className="text-xs text-gray-400 truncate">{email.preview}</div>
            <div className="text-xs text-gray-500 mt-1">
              {formatDistanceToNow(new Date(email.date), { addSuffix: true })}
            </div>
          </div>
        ))}
      </div>

      {/* Email preview */}
      <div className="flex-1 bg-slate-800/40 rounded-xl overflow-y-auto">
        <MailPreview email={selected} />
      </div>
    </div>
  );
}