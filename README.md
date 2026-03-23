# Habit Tracker

A habit tracking app with daily check-ins, streaks, and visual progress charts — built to practice modern React patterns with a production-ready stack.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square)

## Features

- **Auth** — Register, login, and logout with Supabase Auth
- **Habit management** — Full CRUD: create, edit, and delete habits with custom color and icon
- **Daily check-ins** — Mark habits as done each day, track current streaks
- **Progress charts** — Weekly bar chart and 90-day activity heatmap
- **Filters** — View all, active, completed today, or by frequency
- **Export** — Download your full history as a CSV file
- **Dark mode** — System preference or manual toggle
- **Responsive** — Works on mobile and desktop

## Tech stack

| Layer        | Technology                 |
| ------------ | -------------------------- |
| Framework    | Next.js 15 (App Router)    |
| Language     | TypeScript                 |
| Styling      | Tailwind CSS + shadcn/ui   |
| State        | Zustand (auth + UI)        |
| Client Fetch | Tanstack Query             |
| Server Fetch | Server Components          |
| Forms        | React Hook Form + Zod      |
| Charts       | Recharts                   |
| Database     | Supabase PostgreSQL        |
| API layer    | Server Actions + lib/db.ts |

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

> Data persists in Supabase PostgreSQL — no separate process needed.

## Project structure

```
src/
├── app/
│   ├── (auth)/          # Login and register pages
│   └── (dashboard)/     # Habits, today, stats, settings
├── actions/             # Server Actions (login, register, habits CRUD)
├── components/          # UI components (habits, stats, shared)
├── hooks/               # Tanstack Query hooks (useHabits, useCompletions, useStats)
├── lib/
│   ├── supabase.ts      # Supabase client initialization
│   ├── db.ts            # Database abstraction layer
│   ├── schemas.ts       # Zod schemas shared between client and server
│   └── utils.ts         # Date helpers, streak logic, CSV export
├── providers/           # Tanstack Query provider
├── middleware.ts        # Route protection
├── store/               # Zustand store (auth session + UI state)
└── types/               # TypeScript interfaces
```

## Scripts

| Command              | Description             |
| -------------------- | ----------------------- |
| `npm run dev`        | Start dev server        |
| `npm run build`      | Production build        |
| `npm run lint`       | Run ESLint              |
| `npm run type-check` | Run TypeScript compiler |
