# CareBridge AI

AI-Powered Hospital, Equipment, and Emergency Coordination Platform built for a hackathon MVP.

## Repo Structure

```text
Hackathonn/
├─ client/                    # Next.js frontend (App Router, TypeScript, Tailwind)
│  ├─ app/                    # Routes and layouts
│  ├─ components/             # Reusable UI and feature components
│  ├─ hooks/                  # Shared React hooks
│  ├─ lib/                    # API helpers and utilities
│  ├─ services/               # Frontend service layer
│  ├─ socket/                 # Socket.IO client setup
│  ├─ store/                  # Zustand stores
│  └─ types/                  # Shared frontend types
├─ server/                    # Node.js + Express backend
│  ├─ src/
│  │  ├─ config/              # Environment, DB, external config
│  │  ├─ controllers/         # HTTP handlers
│  │  ├─ middleware/          # Auth, roles, uploads, error handling
│  │  ├─ models/              # Mongoose models
│  │  ├─ routes/              # API route definitions
│  │  ├─ scripts/             # Seed and utility scripts
│  │  ├─ services/            # Business logic
│  │  ├─ sockets/             # Socket.IO events
│  │  ├─ types/               # Backend shared types
│  │  └─ utils/               # Shared backend helpers
│  └─ dist/                   # Build output (generated)
├─ .gitignore
└─ README.md
```

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, TypeScript
- Database: MongoDB with Mongoose
- Realtime: Socket.IO
- Maps: Leaflet
- AI: Hugging Face embeddings, OpenRouter/Gemini-style assistant integrations

## Local Setup

### Frontend

```bash
cd client
npm install
npm run dev
```

Create `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend

```bash
cd server
npm install
npm run dev
```

Create `server/.env` from `server/.env.example`.

## GitHub-Friendly Notes

- Keep only source code and docs in the repo root.
- Runtime folders like `tmp-runtime-logs/`, `.next/`, `dist/`, and `node_modules/` are ignored.
- Frontend and backend are clearly separated so teammates can navigate the repo quickly.
