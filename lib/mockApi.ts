import { mockUsers as initialUsers, mockEmails, pricingPlans, User, Email, PricingPlan } from '@/data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// In‑memory user store (mutable)
let users = [...initialUsers];

// Store passwords for each user (email → password)
let userPasswords: Record<string, string> = {
  'mehedi@gmail.com': 'password123',   // existing demo user
};

export const mockApi = {
  // ========== AUTH ==========
  login: async (email: string, password: string) => {
    await delay(800);
    const user = users.find(u => u.email === email);
    if (!user || userPasswords[email] !== password) {
      throw new Error('Invalid credentials');
    }
    return { user, token: `mock-jwt-${Date.now()}` };
  },

  signup: async (name: string, email: string, password: string) => {
    await delay(800);
    if (users.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    const newUser: User = {
      id: `u${users.length + 1}`,
      name,
      email,
      avatar: name.slice(0, 2).toUpperCase(),
      plan: 'basic',
      planExpiry: new Date(Date.now() + 30 * 24 * 3600000).toISOString(),
    };
    users.push(newUser);
    userPasswords[email] = password;   // store the password
    return { user: newUser, token: `mock-jwt-${Date.now()}` };
  },

  forgotPassword: async (email: string) => {
    await delay(600);
    if (!users.some(u => u.email === email)) {
      throw new Error('User not found');
    }
    // In a real app, send reset email. Here just return success.
    return { success: true };
  },

  // ========== USER ==========
  getCurrentUser: async (token: string) => {
    await delay(300);
    // For demo, return the first user (or decode from token in real app)
    return users[0];
  },

  updateUser: async (userId: string, updates: Partial<User>) => {
    await delay(500);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) throw new Error('User not found');
    users[index] = { ...users[index], ...updates };
    return users[index];
  },

  // ========== EMAILS ==========
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

  // ========== SUBSCRIPTION & PLANS ==========
  getPricingPlans: async () => {
    await delay(300);
    return pricingPlans;
  },

  updatePlan: async (userId: string, planId: string) => {
    await delay(700);
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    user.plan = planId as any;
    user.planExpiry = new Date(Date.now() + 30 * 24 * 3600000).toISOString();
    return { success: true, plan: planId };
  },
};