# Wander Wave Backend
## Setup
1. Copy `.env.sample` to `.env` and fill values.
2. Install deps: `npm install`
3. Run: `npm run dev` (requires MongoDB running)

## API
- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/guides?location=&language=` (public)
- `POST /api/guides` (protected, Bearer token)
- `POST /api/contact`