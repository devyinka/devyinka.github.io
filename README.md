# Salam Sodiq — Software Engineering Portfolio

A light editorial redesign of the existing Next.js portfolio.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Existing project data, media and contact API

## Run locally
1. Install Node.js (use a version compatible with the installed Next.js release).
2. Run `npm install`.
3. Copy `.env.example` to `.env` and enter your Gmail address and Gmail App Password.
4. Run `npm run dev` and open `http://localhost:3000`.

## Important environment-file note
Environment files are intentionally excluded from this archive and ignored by Git. Restore the required email service variables locally before testing the contact form. Never commit API keys, passwords or SMTP credentials.

## Before deployment
- Verify the project descriptions and live links.
- Test the contact form with valid email-service environment variables.
- Run `npm run build`.
- Check all routes on mobile and desktop.
