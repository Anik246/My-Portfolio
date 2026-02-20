# Portfolio Setup Guide

This guide will help you set up, customize, and deploy your professional portfolio.

## Quick Start

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## Customization Guide

### Updating Personal Information

#### Home Page (`app/page.jsx`)

**Update the hero section:**
```javascript
// Line ~60
<h1>Your Name</h1>
<p>Your Title • Your Specializations</p>

// Contact info (Line ~75)
<MapPin /> Your Location
<Mail /> your.email@example.com
<Phone /> Your Phone Number
```

**Update links:**
```javascript
// Line ~95
<a href="https://github.com/yourusername">GitHub</a>
```

### Updating Education

Find the education array (around line 280) and modify:

```javascript
{
  degree: "Your Degree",
  institution: "Your University",
  location: "City, Country",
  year: "Year",
  cgpa: "Your GPA",
  details: ["Achievement 1", "Achievement 2"]
}
```

### Updating Experience

Find the experience section (around line 370) and update:

```javascript
<h3>Your Job Title</h3>
<p>Company Name</p>
<p>Start Date – End Date</p>
```

### Adding/Updating Projects

#### Method 1: Update Existing Projects
Open `app/projects/[slug]/page.jsx` and edit the `projectsData` object:

```javascript
'your-project-slug': {
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description...",
  tags: ["Tech1", "Tech2", "Tech3"],
  gradient: "from-cyan-500 to-blue-600",
  date: "2024",
  features: [
    "Feature 1",
    "Feature 2",
  ],
  technologies: {
    "Category": ["Tech1", "Tech2"]
  },
  challenges: ["Challenge 1"],
  outcomes: ["Outcome 1"]
}
```

#### Method 2: Add New Projects
1. Copy an existing project object in `projectsData`
2. Change the slug (key) to your project name in kebab-case
3. Update all fields
4. The project will automatically appear on the home page

### Customizing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

For gradients in the code, look for `from-cyan-500 to-blue-600` patterns and change them:
- `from-cyan-500` → `from-yourcolor-500`
- `to-blue-600` → `to-yourcolor-600`

Popular gradient combinations:
- Cyan to Blue: `from-cyan-500 to-blue-600`
- Purple to Pink: `from-purple-500 to-pink-600`
- Blue to Purple: `from-blue-500 to-purple-600`
- Green to Teal: `from-green-500 to-teal-600`
- Orange to Red: `from-orange-500 to-red-600`

### Customizing Fonts

#### Option 1: Change Google Fonts
Edit `app/layout.jsx`:

```javascript
import { YourFont1, YourFont2 } from 'next/font/google';

const font1 = YourFont1({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

const font2 = YourFont2({ 
  subsets: ['latin'],
  variable: '--font-body',
});
```

Popular font combinations:
- **Modern Professional**: Outfit + Manrope (current)
- **Classic Elegant**: Playfair Display + Source Sans Pro
- **Tech/Startup**: Space Grotesk + Inter
- **Clean Minimal**: Poppins + Open Sans
- **Bold Modern**: Raleway + Lato

#### Option 2: Use Custom Fonts
1. Add font files to `public/fonts/`
2. Update `globals.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2');
}
```

### Adding a Resume/CV Download

1. Add your CV PDF to `public/` folder (e.g., `Shahriar_Rahman_CV.pdf`)
2. Update the download button in `app/page.jsx`:

```javascript
<a 
  href="/Shahriar_Rahman_CV.pdf"
  download
  className="px-6 py-3 bg-slate-800..."
>
  <Download className="w-5 h-5" />
  Download CV
</a>
```

### Updating Meta Tags for SEO

Edit `app/layout.jsx`:

```javascript
export const metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
  keywords: 'your, keywords, here',
  openGraph: {
    title: 'Your Name',
    description: 'Your description',
    images: ['/og-image.jpg'],
  }
};
```

### Adding Social Media Links

In `app/page.jsx`, find the contact section and add:

```javascript
<a 
  href="https://linkedin.com/in/yourprofile"
  className="flex items-center gap-4..."
>
  <Linkedin className="w-6 h-6" />
  LinkedIn Profile
</a>
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your site will be live at `your-project.vercel.app`

#### Custom Domain on Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS settings as instructed

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Deploy to Your Own Server

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

4. Set up Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Performance Optimization

### Image Optimization

Always use Next.js Image component:

```javascript
import Image from 'next/image';

<Image 
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### Lazy Loading

Components are automatically code-split by Next.js. For additional lazy loading:

```javascript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors

1. Clear cache:
```bash
rm -rf .next node_modules
npm install
npm run build
```

2. Check for syntax errors in JSX
3. Ensure all imports are correct
4. Verify all environment variables are set

### Styling Issues

1. Clear Tailwind cache:
```bash
rm -rf .next
npm run dev
```

2. Check `tailwind.config.js` for correct content paths
3. Verify CSS is imported in `layout.jsx`

## Best Practices

### For Master's Applications
- Emphasize research and publications
- Highlight academic achievements
- Include relevant coursework
- Show extracurricular academic activities
- Link to publications and papers

### For Job Applications
- Focus on professional experience
- Highlight technical skills
- Showcase real-world projects
- Include metrics and outcomes
- Emphasize problem-solving abilities

### General Tips
- Keep content updated regularly
- Use professional language
- Proofread all content
- Test on multiple devices
- Ensure fast loading times
- Make contact information easily accessible

## Need Help?

- Check [Next.js Documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Read [Framer Motion Guides](https://www.framer.com/motion/)

## Support

For questions or issues:
- Email: shahriarr246@gmail.com
- GitHub: [@Anik246](https://github.com/Anik246)

---

Good luck with your applications! 🚀
