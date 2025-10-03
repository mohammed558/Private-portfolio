# Portfolio Website

A modern, responsive portfolio website built with Next.js, ShadCN UI, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with ShadCN UI components
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Dark mode support
- 🚀 Optimized for performance
- 📧 Contact form functionality
- 🎯 SEO optimized

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Skills, experience, and personal information
- **Projects**: Showcase of featured and other projects
- **Contact**: Contact form and social links

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/Hero.tsx` - Name, title, and description
- `src/components/sections/About.tsx` - About text, skills, and stats
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Contact information
- `src/app/layout.tsx` - SEO metadata

### Styling
- Colors and themes can be customized in `src/app/globals.css`
- Component styles can be modified in individual component files
- Tailwind configuration is in `tailwind.config.ts`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

This project is open source and available under the [MIT License](LICENSE).