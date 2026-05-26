# Discount Hunter

Multiplatform discount code finder — search, save, and share promo codes across stores.

## Stack

- **Mobile**: React Native + Expo
- **Web**: Next.js (App Router) + Tailwind CSS
- **API**: Node.js + Fastify + TypeScript
- **Database**: PostgreSQL + Redis + Meilisearch
- **Shared**: TypeScript package for types and utilities

## Prerequisites

- Node.js 20+
- npm 10+
- Docker (for PostgreSQL, Redis, Meilisearch)

## Setup

```bash
# 1. Clone and install
git clone <repo-url> discount-hunter
cd discount-hunter
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Start infrastructure
npm run docker:up

# 4. Build shared types
npm run build:shared

# 5. Start dev servers (in separate terminals)
npm run dev:api   # → http://localhost:3000
npm run dev:web   # → http://localhost:3001
npm run dev:mobile # → Expo Go
```

## Project Structure

```
discount-hunter/
├── apps/
│   ├── mobile/    # React Native (Expo)
│   ├── web/       # Next.js
│   └── api/       # Fastify backend
├── packages/
│   └── shared/    # Shared TypeScript types
├── database/
│   └── migrations/
├── docker-compose.yml
└── package.json   # npm workspaces
```

## License

MIT
