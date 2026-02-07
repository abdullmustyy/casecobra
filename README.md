# CaseCobra <img src="public/snake-2.png" alt="Snake Logo" height="28">

> Create custom phone cases with your own images — protect your memories, not just your phone.

A modern e-commerce platform that allows users to design and order custom phone cases
featuring their personal photos. Built with Next.js 15, featuring a drag-and-drop case
designer, secure payments, and real-time order tracking.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.1-2D3748?logo=prisma)

## ✨ Features

- **Custom Case Designer** — Drag, resize, and position your image on the phone case
  with the interactive `react-rnd` editor
- **Multiple Phone Models** — Support for iPhone X through iPhone 16
- **Customization Options** — Choose from different materials (silicone, polycarbonate),
  finishes (smooth, textured), and colors (black, blue, rose)
- **Secure Authentication** — User authentication powered by Kinde
- **Secure Payments** — Stripe integration for safe and reliable checkout
- **Order Tracking** — Real-time order status updates (awaiting shipment, shipped, fulfilled)
- **Email Notifications** — Beautiful order confirmation emails via React Email and Resend
- **Admin Dashboard** — Manage orders, track revenue, and update order statuses
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

| Category | Technology |
| ---------- | ------------ |
| **Framework** | [Next.js 15](https://nextjs.org/) with App Router |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/), [Headless UI](https://headlessui.com/) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/) |
| **Authentication** | [Kinde](https://kinde.com/) |
| **Payments** | [Stripe](https://stripe.com/) |
| **File Uploads** | [UploadThing](https://uploadthing.com/) |
| **Email** | [React Email](https://react.email/) + [Resend](https://resend.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Package Manager** | [Bun](https://bun.sh/) |

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) or [Bun](https://bun.sh/)
- [PostgreSQL](https://www.postgresql.org/) database
- Account credentials for:
  - [Kinde](https://kinde.com/) (Authentication)
  - [Stripe](https://stripe.com/) (Payments)
  - [UploadThing](https://uploadthing.com/) (File uploads)
  - [Resend](https://resend.com/) (Email)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/abdullmustyy/casecobra.git
   cd casecobra
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/casecobra"

   # Kinde Auth
   KINDE_CLIENT_ID=
   KINDE_CLIENT_SECRET=
   KINDE_ISSUER_URL=
   KINDE_SITE_URL=http://localhost:3000
   KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth-callback

   # UploadThing
   UPLOADTHING_TOKEN=

   # Stripe
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=

   # Resend (Email)
   RESEND_API_KEY=

   # Admin
   ADMIN_EMAIL=your-admin-email@example.com
   ```

4. **Set up the database**

   ```bash
   bunx prisma generate
   bunx prisma db push
   # or
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗂️ Project Structure

```text
casecobra/
├── app/                    # Next.js App Router
│   ├── api/                # API routes (auth, uploadthing, webhooks)
│   ├── auth-callback/      # Post-login callback handler
│   ├── configure/          # Case configuration flow
│   │   ├── upload/         # Image upload step
│   │   ├── design/         # Case designer step
│   │   └── preview/        # Order preview step
│   ├── dashboard/          # Admin dashboard
│   └── thank-you/          # Order confirmation page
├── components/             # Reusable React components
│   └── ui/                 # UI primitives (buttons, dialogs, etc.)
├── config/                 # Product configuration (pricing)
├── db/                     # Database client
├── emails/                 # React Email templates
├── lib/                    # Utility functions
├── prisma/                 # Database schema and migrations
└── public/                 # Static assets
```

## 💰 Pricing Structure

| Item | Price |
| ------ | ------- |
| Base Price | $14.00 |
| Polycarbonate Material | +$5.00 |
| Textured Finish | +$3.00 |

## 🚀 Deployment

The project is configured for deployment on [Vercel](https://vercel.com/):

```bash
bun run build
# or
npm run build
```

The `vercel-build` script handles Prisma generation and migrations automatically.

---

**CaseCobra** — *Your Image on a Custom Phone Case.*
