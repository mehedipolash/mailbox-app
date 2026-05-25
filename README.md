# MailNest — Frontend Email Client

> A fully responsive email management dashboard built as an internship submission.  
> All data is mocked. No real backend or database is involved.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-mailnest--chi.vercel.app-black?style=flat-square&logo=vercel)](https://mailnest-chi.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-mehedipolash%2Fmailbox--app-181717?style=flat-square&logo=github)](https://github.com/mehedipolash/mailbox-app)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How the Mock Data Layer Works](#how-the-mock-data-layer-works)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

---

## Overview

MailNest is a front-end-only email client demo built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS v4**. It demonstrates a complete SaaS product UI — from the marketing landing pages through authenticated dashboard views — using a fully typed mock data layer in place of a real API.

The project was built to meet an internship task specification, with several extras added on top of the required scope.

---

## Live Demo

**URL:** [https://mailnest-chi.vercel.app/](https://mailnest-chi.vercel.app/)

**Test credentials:**

| Field    | Value              |
|----------|--------------------|
| Email    | `mehedi@gmail.com` |
| Password | `password123`      |

---

## Features

### Required Scope — All Implemented

| Requirement | Status | Notes |
|---|---|---|
| Next.js App Router | ✅ | File-based routing throughout |
| Tailwind CSS | ✅ | Custom "Carbon Inferno" theme |
| Responsive Design | ✅ | Mobile and desktop breakpoints |
| Home page | ✅ | With Lottie hero animation |
| Pricing page | ✅ | Basic, Pro, and Enterprise plans |
| Contact page | ✅ | |
| Terms & Privacy pages | ✅ | |
| How It Works page | ✅ | `/how-it-works` |
| Navbar & Footer | ✅ | Hidden on dashboard routes |
| Auth flows | ✅ | Sign up, login, forgot password |
| Customer dashboard | ✅ | Protected route |
| Mail list & preview | ✅ | Split-pane email viewer |
| Subscription page | ✅ | |
| Profile settings | ✅ | |
| Dummy JSON data | ✅ | `data/mockData.ts` |
| Mock API structure | ✅ | `lib/mockApi.ts` |
| Placeholder assets | ✅ | Avatars, Lottie animation |

### Extras (Beyond Specification)

- **Lottie animation** — email hero animation on the homepage via `lottie-react`
- **"Carbon Inferno" colour theme** — a custom yellow/black/red palette with glassmorphism effects and glowing borders
- Simulated async delays in the mock API layer for realistic loading states

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.6 | React framework & App Router |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3+ | Utility-first styling |
| [lottie-react](https://github.com/LottieFiles/lottie-react) | 2.4.1 | Hero animation |
| [react-icons](https://react-icons.github.io/react-icons/) | 5.6.0 | Icon library |
| [date-fns](https://date-fns.org/) | 4.1.0 | Relative timestamp formatting |
| [Vercel](https://vercel.com/) | — | Hosting & CI/CD |

---

## Project Structure

```
mailbox-app/
├── app/
│   ├── (auth)/                 # Login, signup, forgot-password
│   ├── (public)/               # Pricing, contact, terms, privacy, how-it-works
│   ├── dashboard/              # Protected dashboard pages
│   │   ├── mail/               # Mail list and preview
│   │   ├── profile/            # Profile settings
│   │   └── subscription/       # Plan management
│   ├── layout.tsx              # Root layout with AuthProvider
│   ├── page.tsx                # Homepage with Lottie animation
│   └── globals.css             # Tailwind v4 + custom Carbon Inferno classes
├── components/
│   ├── Navbar.tsx              # Top navigation (hidden on dashboard)
│   ├── Footer.tsx              # Global footer
│   ├── DashboardSidebar.tsx    # Sidebar navigation
│   ├── MailPreview.tsx         # Email content viewer
│   └── lottieHero.tsx          # Lottie animation wrapper
├── context/
│   └── AuthContext.tsx         # Auth state via React Context
├── data/
│   └── mockData.ts             # Hardcoded users, emails, and pricing plans
├── lib/
│   └── mockApi.ts              # Simulated async API calls
├── public/
│   └── assets/lottie/          # Lottie animation JSON
└── package.json
```

---

## How the Mock Data Layer Works

There is no backend. All data is generated at build time and lives entirely in the client.

- **`data/mockData.ts`** — exports hardcoded arrays of users, email threads, and pricing plans.
- **`lib/mockApi.ts`** — wraps those arrays in async functions that resolve after a `setTimeout` delay, simulating realistic network latency.
- **Authentication** — a fake JWT token is written to `localStorage` on login. The in-memory user list resets on every server restart (dev mode).

This approach keeps the project fully self-contained while accurately representing the shape of a real API integration.

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/mehedipolash/mailbox-app.git
cd mailbox-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
Log in with the [test credentials](#live-demo) above.

---

## Deployment

The project is deployed on **Vercel** with automatic deployments on every push to `main`.

No environment variables are required — the app has no external service dependencies.

---

*Built by **Mehedi Hasan Polash** as an internship test submission.*
