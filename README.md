# Authentication-Using-TS

A TypeScript REST API example for user authentication using Express, Drizzle ORM, PostgreSQL, and Zod validation.

## Project Overview

This project provides a minimal authentication service with sign-up and sign-in endpoints. It uses:

- `Express` for the web server
- `TypeScript` for type-safe development
- `Zod` for request payload validation
- `Drizzle ORM` with PostgreSQL for database access
- `dotenv` for environment configuration
- built-in Node `crypto` for password hashing

## Features

- `POST /auth/sign-up`: create a new user with hashed password and salt
- `POST /auth/sign-in`: verify user credentials and return a placeholder token
- `GET /`: simple health check endpoint

## Getting Started

### Prerequisites

- Node.js 20+ or compatible version
- PostgreSQL database
- `DATABASE_URL` environment variable configured

### Install dependencies

```bash
npm install
```

### Environment

Create a `.env` file or set `DATABASE_URL` in your shell environment.

Example `.env`:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

### Build

```bash
npm run build
```

### Run in development

```bash
npm run dev
```

### Run production build

```bash
npm start
```

## Database

The project uses Drizzle ORM and the database connection is configured from `process.env.DATABASE_URL` in `src/db/index.ts`.

Drizzle CLI commands are available in `package.json`:

- `npm run db:generate` — generate Drizzle client files
- `npm run db:migrate` — run migrations
- `npm run studio` — open Drizzle Studio

## API Endpoints

### Sign up

- URL: `POST /auth/sign-up`
- Body:
  - `firstName` (string, 2-45 chars)
  - `lastName` (string, 2-45 chars)
  - `email` (valid email)
  - `password` (string, 6-66 chars)

### Sign in

- URL: `POST /auth/sign-in`
- Body:
  - `email` (valid email)
  - `password` (string, 6-66 chars)

### Health check

- URL: `GET /`
- Returns a JSON welcome message

## Project Structure

- `src/index.ts` — server entrypoint
- `src/app/app.ts` — Express application setup
- `src/app/auth/auth.routes.ts` — authentication routes
- `src/app/auth/auth.controllers.ts` — signup/signin logic
- `src/app/auth/model.ts` — request validation schemas
- `src/db/index.ts` — database connection setup
- `src/db/schema.ts` — Drizzle table schema definitions

## Notes

- Passwords are hashed with `HMAC-SHA256` and a per-user salt.
- `sign-in` currently returns a placeholder token value.
- Update the token creation logic to use `jsonwebtoken` or another auth mechanism as needed.

## License

This project is provided as-is.
