# Shahriar Rahman - Professional Portfolio

A modern, professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Perfect for master's applications and job searching.

## Features

- 🎨 Modern, dark-themed design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast page loads with Next.js optimization
- 🎭 Smooth animations using Framer Motion
- 📊 Detailed project pages with comprehensive information
- 🎓 Perfect for academic applications and job searching
- 🔍 SEO optimized with proper meta tags

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Outfit & Manrope (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx          # Root layout with fonts
│   ├── page.jsx            # Home page with all sections
│   ├── globals.css         # Global styles
│   └── projects/
│       └── [slug]/
│           └── page.jsx    # Dynamic project detail pages
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Sections

### Home Page
- **Hero Section**: Introduction with name, title, and call-to-action buttons
- **About**: Professional focus and personal interests
- **Skills**: Technical skills organized by category
- **Education**: Academic background with achievements
- **Experience**: Professional work history
- **Research & Publications**: Academic publications and conference papers
- **Projects**: Featured projects with links to detail pages
- **Extracurricular Activities**: Clubs, competitions, and workshops
- **Contact**: Multiple ways to get in touch

### Project Detail Pages
Each project has a dedicated page with:
- Overview and description
- Key features
- Technologies used
- Technical challenges
- Outcomes and impact
- Publications (if applicable)

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme. Current theme uses:
- Slate grays for backgrounds
- Cyan and blue for accents
- Purple for highlights

### Fonts
Fonts are configured in `app/layout.jsx`. Current fonts:
- **Outfit**: Headings
- **Manrope**: Body text

### Content
All content can be edited directly in:
- `app/page.jsx` for home page sections
- `app/projects/[slug]/page.jsx` for project details

### Adding New Projects
1. Open `app/projects/[slug]/page.jsx`
2. Add a new entry to the `projectsData` object
3. Use a unique slug as the key
4. The project will automatically appear on the home page and have its own detail page

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js applications.

## Performance

- Optimized images with Next.js Image component
- Code splitting for faster page loads
- CSS optimization with Tailwind CSS
- Smooth animations that don't impact performance
- Lazy loading for improved initial load time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio is open source and available for personal use. Feel free to fork and customize it for your own needs.

## Contact

For questions or collaborations:
- **Email**: shahriarr246@gmail.com
- **Phone**: +880 1314 907760
- **GitHub**: [@Anik246](https://github.com/Anik246)

---

Built with ❤️ by Shahriar Rahman
