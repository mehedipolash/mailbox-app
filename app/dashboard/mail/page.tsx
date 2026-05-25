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

  if (loading) return <div className="flex justify-center items-center h-full text-yellow-400">Loading secure messages...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
    
      <div className="w-full md:w-96 space-y-3 overflow-y-auto pr-2">
        {emails.map(email => (
          <div
            key={email.id}
            onClick={() => handleSelect(email)}
            className={`bg-black/50 backdrop-blur-sm border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
              selected?.id === email.id
                ? 'border-yellow-400 shadow-lg shadow-yellow-500/20'
                : 'border-yellow-500/30 hover:border-yellow-400 hover:shadow-[0_0_10px_rgba(234,179,8,0.2)]'
            }`}
          >
            <div className="flex justify-between items-start">
              <span className="font-semibold text-white">{email.from.name}</span>
              <button onClick={e => toggleStar(email.id, e)}>
                <FiStar className={email.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'} />
              </button>
            </div>
            <div className="text-sm font-mono text-gray-300 mt-1">{email.subject}</div>
            <div className="text-xs text-gray-400 truncate mt-1">{email.preview}</div>
            <div className="text-xs text-yellow-500/70 mt-2">
              {formatDistanceToNow(new Date(email.date), { addSuffix: true })}
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex-1 bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl overflow-y-auto">
        <MailPreview email={selected} />
      </div>
    </div>
  );
}