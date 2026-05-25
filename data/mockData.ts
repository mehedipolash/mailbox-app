export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: 'basic' | 'pro' | 'enterprise';
  planExpiry: string;
}

export interface Email {
  id: string;
  from: { name: string; email: string };
  subject: string;
  preview: string;
  content: string;
  date: string;
  read: boolean;
  starred: boolean;
  tag?: 'work' | 'personal' | 'finance' | 'updates';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Lena Chen',
    email: 'lena@example.com',
    avatar: 'LC',
    plan: 'pro',
    planExpiry: '2025-06-01T00:00:00Z',
  },
];

export const mockEmails: Email[] = [
  {
    id: 'e1',
    from: { name: 'Victor Rojas', email: 'victor@designstudio.com' },
    subject: 'New branding assets ready',
    preview: 'Hey Lena, here are the final logo variations...',
    content: '<p>Hi Lena,</p><p>Attached you’ll find the SVG and PNG versions of the new logo. Let me know your thoughts!</p><p>Best,<br>Victor</p>',
    date: '2025-05-24T09:15:00Z',
    read: false,
    starred: true,
    tag: 'work',
  },
  {
    id: 'e2',
    from: { name: 'Stripe', email: 'billing@stripe.com' },
    subject: 'Your invoice for May 2025',
    preview: 'Thanks for your payment of $29.00...',
    content: '<p>Your subscription has been renewed. Receipt attached.</p>',
    date: '2025-05-23T14:20:00Z',
    read: true,
    starred: false,
    tag: 'finance',
  },
  {
    id: 'e3',
    from: { name: 'Marcus Lee', email: 'marcus@startup.com' },
    subject: 'Meeting tomorrow at 11am',
    preview: "Let's finalise the Q3 roadmap...",
    content: '<p>Please join the Zoom call tomorrow.</p>',
    date: '2025-05-22T08:00:00Z',
    read: false,
    starred: false,
    tag: 'work',
  },
  {
    id: 'e4',
    from: { name: 'Netflix', email: 'info@netflix.com' },
    subject: 'New releases this week',
    preview: 'Check out what’s new on Netflix...',
    content: '<p>Your weekly update of movies and shows.</p>',
    date: '2025-05-21T18:30:00Z',
    read: true,
    starred: false,
    tag: 'updates',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9,
    period: 'month',
    features: ['2 mailboxes', '10 GB storage', 'Basic support', 'Email forwarding'],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 29,
    period: 'month',
    features: ['10 mailboxes', '100 GB storage', 'Priority support', 'Custom domain', 'Analytics'],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    period: 'month',
    features: ['Unlimited mailboxes', '1 TB storage', '24/7 phone support', 'SSO', 'SLA'],
  },
];