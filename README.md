# AI Podcast Platform Convex 🚀

<div align="center">

![Home](/public/project-image/home.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-000000?style=for-the-badge&logo=convex&logoColor=white)](https://www.convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-000000?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![AI SDK](https://img.shields.io/badge/AI_SDK-000000?style=for-the-badge&logo=ai&logoColor=white)](https://sdk.vercel.ai/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

## ✨ Features

<div align="center">

| Feature                      | Description                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| 🎙️ AI Podcast Generation     | Create podcasts with different AI voices including alloy, shimmer, nova, echo, fable, and onyx |
| 🖼️ AI Thumbnail Generation   | Generate custom thumbnails with DALL-E 3 using natural language prompts                        |
| 🔍 Smart Content Discovery   | Find podcasts through multi-field search by author, title, or description                      |
| 🔄 Real-time Synchronization | Experience instant, real-time updates powered by Convex's reactive backend                     |
| 🔐 Secure Authentication     | Protect user data with secure authentication via Clerk                                         |
| 📱 Responsive Design         | Enjoy a consistent experience across all devices with a modern, responsive design              |
| 👥 User Profiles             | View creator profiles and their podcast collections                                            |
| 💬 Transcriptions            | Access full transcripts of AI-generated podcast content                                        |

</div>

## 🌟 Tech Highlights

- OpenAI integration for TTS (Text-to-Speech) podcast generation and DALL-E 3 image creation
- Real-time database with Convex for reactive data synchronization across all clients
- Clean, type-safe API layer ensuring robust and maintainable code
- Modern UI components built with shadcn/ui and styled using Tailwind CSS
- Edge-ready deployment for fast, scalable, and reliable performance

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-podcast-platform-convex.git

# Navigate into the project directory
cd ai-podcast-platform-convex

# Install dependencies
npm install

# Create your environment variables file
cp .env.example .env

# (Optional) Start the local Convex development server
npx convex dev

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the application.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>
  
### Core Frameworks

- **[Next.js](https://nextjs.org/)** - React framework with App Router for server-side rendering and static site generation
- **[TypeScript](https://www.typescriptlang.org/)** - Enhances development experience with robust type safety
- **[React](https://reactjs.org/)** - Library for building interactive user interfaces

### Backend & Data

- **[Convex](https://www.convex.dev/)** - Real-time backend that simplifies dynamic data management and synchronization
- **[Uploadstuff](https://uploadstuff.vercel.app/)** - For handling file uploads to the Convex backend

### Authentication

- **[Clerk](https://clerk.com/)** - Complete authentication and user management solution

### Artificial Intelligence

- **[OpenAI](https://openai.com/)** - Powers the podcast TTS generation and image creation features
- **[AI SDK](https://sdk.vercel.ai/)** - Tools for AI feature integration

### Form Management & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Efficient form management
- **[Zod](https://zod.dev/)** - Type-first schema validation for safe form handling

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Shadcn/ui](https://ui.shadcn.com/)** - Unstyled, accessible components built with Radix UI and Tailwind
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icon set
- **[Embla Carousel](https://www.embla-carousel.com/)** - Flexible carousel/slider library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications for React applications

### Development & Deployment

- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[Prettier](https://prettier.io/)** - Automated code formatting
- **[Vercel](https://vercel.com/)** - Deployment platform optimized for Next.js

</details>

## 📸 Screenshots

<div align="center">

### Discover Page

![Discover Page](/public/project-image/discover.png)

### Podcast Creation

![Create Podcast](/public/project-image/create-podcast.png)

### Podcast Page

![Podcast Page](/public/project-image/podcast-page.png)

### Profile Page

![Profile Page](/public/project-image/profile.png)

</div>

## 🔐 Environment Variables

To run this project, add the following environment variables to your `.env` file:

| Variable                            | Description                                           |
| ----------------------------------- | ----------------------------------------------------- |
| `CONVEX_DEPLOYMENT`                 | Convex deployment identifier                          |
| `NEXT_PUBLIC_CONVEX_URL`            | URL for the Convex backend service                    |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client-side authentication  |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side authentication       |
| `CLERK_WEBHOOK_SECRET`              | Clerk issuer URL (Add to Convex Environment Variable) |
| `OPENAI_API_KEY`                    | API key for OpenAI integration                        |

Example .env file content:

```
CONVEX_DEPLOYMENT= // Convex deployment identifier
NEXT_PUBLIC_CONVEX_URL= // URL for the Convex backend service

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= // Clerk publishable key for client-side authentication
CLERK_SECRET_KEY= // Clerk secret key for server-side authentication

CLERK_WEBHOOK_SECRET= // Clerk webhook secret for handling webhooks

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

OPENAI_API_KEY= // API key for OpenAI integration
```
