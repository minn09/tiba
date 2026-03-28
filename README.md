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

| Layer             | Technology                    |
| ----------------- | ----------------------------- |
| Framework         | Next.js 15 (App Router)       |
| Language          | TypeScript                    |
| Styling           | Tailwind CSS + shadcn/ui      |
| State             | Zustand (auth + UI)           |
| Client Fetch      | Tanstack Query                |
| Server Fetch      | Server Components             |
| Queries/Mutations | Server Actions (app/actions/) |
| Forms             | React Hook Form + Zod         |
| Charts            | Recharts                      |
| Database          | Supabase PostgreSQL           |
| Clients           | @supabase/ssr                 |

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
│   ├── (dashboard)/    # Habits, today, stats, settings
│   ├── actions/         # Server Actions (queries + mutations)
│   │   ├── auth.ts     # login, register, logout
│   │   └── habits.ts   # getHabits, createHabit, updateHabit, deleteHabit
│   └── providers/      # Tanstack Query provider
│
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── habits/         # HabitCard, HabitForm, HabitList
│   ├── stats/          # Charts, HeatMap, StatsCard
│   └── shared/         # Navbar, Sidebar, EmptyState
│
├── lib/
│   ├── supabase.ts         # Browser client (createBrowserClient)
│   ├── supabase-server.ts  # Server client (createServerClient)
│   ├── schemas.ts          # Zod schemas
│   └── utils.ts           # Date helpers, streak logic, CSV export
│
├── hooks/
│   ├── useHabits.ts        # Tanstack Query hooks
│   ├── useCompletions.ts   # Tanstack Query hooks
│   └── useStats.ts         # Tanstack Query hooks
│
├── store/
│   └── useAuthStore.ts     # Zustand store (auth + UI state)
│
├── middleware.ts            # Route protection
│
└── types/
    └── index.ts            # TypeScript interfaces
```

## Data flow

```
LECTURA:
  Server Component → supabase-server.ts → Supabase (render inicial)
  Tanstack Query → Server Action → supabase-server.ts → Supabase (interactivo)

MUTACIÓN:
  Server Action → supabase-server.ts → Supabase (create, update, delete)
```

## Scripts

| Command              | Description             |
| -------------------- | ----------------------- |
| `npm run dev`        | Start dev server        |
| `npm run build`      | Production build        |
| `npm run lint`       | Run ESLint              |
| `npm run type-check` | Run TypeScript compiler |
