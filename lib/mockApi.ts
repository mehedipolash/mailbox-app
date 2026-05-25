import { mockUsers, mockEmails, pricingPlans, User, Email, PricingPlan } from '@/data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Auth
  login: async (email: string, password: string) => {
    await delay(800);
    const user = mockUsers.find(u => u.email === email);
    if (!user || password !== 'password123') throw new Error('Invalid credentials');
    return { user, token: `mock-jwt-${Date.now()}` };
  },
  signup: async (name: string, email: string, password: string) => {
    await delay(800);
    if (mockUsers.some(u => u.email === email)) throw new Error('Email exists');
    const newUser: User = {
      id: `u${mockUsers.length + 1}`,
      name,
      email,
      avatar: name.slice(0,2).toUpperCase(),
      plan: 'basic',
      planExpiry: new Date(Date.now() + 30*24*3600000).toISOString(),
    };
    mockUsers.push(newUser);
    return { user: newUser, token: `mock-jwt-${Date.now()}` };
  },
  forgotPassword: async (email: string) => {
    await delay(600);
    if (!mockUsers.some(u => u.email === email)) throw new Error('User not found');
    return { success: true };
  },

  // User
  getCurrentUser: async (token: string) => {
    await delay(300);
    // In real app, decode token; here return first user for demo
    return mockUsers[0];
  },
  updateUser: async (userId: string, updates: Partial<User>) => {
    await delay(500);
    const index = mockUsers.findIndex(u => u.id === userId);
    if (index === -1) throw new Error('User not found');
    mockUsers[index] = { ...mockUsers[index], ...updates };
    return mockUsers[index];
  },

  // Emails
  getEmails: async (filter?: { tag?: string; starred?: boolean }) => {
    await delay(600);
    let emails = [...mockEmails];
    if (filter?.tag) emails = emails.filter(e => e.tag === filter.tag);
    if (filter?.starred) emails = emails.filter(e => e.starred);
    return emails;
  },
  getEmailById: async (id: string) => {
    await delay(300);
    return mockEmails.find(e => e.id === id);
  },
  markAsRead: async (id: string) => {
    await delay(200);
    const email = mockEmails.find(e => e.id === id);
    if (email) email.read = true;
  },
  toggleStar: async (id: string) => {
    await delay(200);
    const email = mockEmails.find(e => e.id === id);
    if (email) email.starred = !email.starred;
  },

  // Subscription & plans
  getPricingPlans: async () => {
    await delay(300);
    return pricingPlans;
  },
  updatePlan: async (userId: string, planId: string) => {
    await delay(700);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    user.plan = planId as any;
    user.planExpiry = new Date(Date.now() + 30*24*3600000).toISOString();
    return { success: true, plan: planId };
  },
};