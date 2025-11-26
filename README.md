# 🧹 U2CleanPro - Professional Cleaning Services Website

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css)

Enterprise-level website untuk layanan kebersihan profesional dengan UI/UX modern dan fitur lengkap.

## ✨ Features

### 🎨 **Modern Design**

- **Premium UI/UX** dengan Plus Jakarta Sans typography
- **Glassmorphism** effects dan gradient backgrounds
- **Smooth animations** menggunakan Framer Motion
- **Responsive design** untuk semua devices

### 📄 **Pages**

- **Home** - Hero, Features, Services, Process, Testimonials, CTA
- **Services** - Detailed service offerings
- **About** - Company info, values, mission & vision
- **Contact** - Contact form dengan info cards
- **Testimonials** - Customer reviews dengan stats
- **FAQ** - Searchable FAQ dengan categories
- **Pricing** - Service packages (optional)

### 🧩 **Components**

- **Navbar** - Sticky header dengan top bar
- **Hero** - Split layout dengan trust badges
- **FeaturesSection** - 6 key benefits
- **ServicesSection** - 4 main services
- **ProcessSection** - 4-step visual flow
- **Testimonials** - Customer reviews
- **CTA** - Call-to-action sections
- **Footer** - Comprehensive footer
- **FAQSection** - Accordion FAQ
- **PricingSection** - Pricing tiers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository
   \`\`\`bash
   git clone <repository-url>
   cd U2proclean
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install

# atau

yarn install
\`\`\`

3. Run development server
   \`\`\`bash
   npm run dev

# atau

yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
U2proclean/
├── src/
│ ├── app/
│ │ ├── about/
│ │ ├── contact/
│ │ ├── faq/
│ │ ├── services/
│ │ ├── testimonials/
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ ├── ui/
│ │ │ ├── button.tsx
│ │ │ ├── input.tsx
│ │ │ ├── label.tsx
│ │ │ └── textarea.tsx
│ │ ├── AboutSection.tsx
│ │ ├── ContactForm.tsx
│ │ ├── CTA.tsx
│ │ ├── FAQSection.tsx
│ │ ├── FeaturesSection.tsx
│ │ ├── Footer.tsx
│ │ ├── Hero.tsx
│ │ ├── Navbar.tsx
│ │ ├── PricingSection.tsx
│ │ ├── ProcessSection.tsx
│ │ ├── ServicesSection.tsx
│ │ └── Testimonials.tsx
│ └── lib/
│ └── utils.ts
├── public/
│ └── images/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.2.6
- **Icons**: Lucide React 0.378.0
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form (ready to integrate)
- **Email**: Nodemailer 7.0.10

## 🎨 Design System

### Colors

- **Primary**: Emerald Green (#10b981)
- **Secondary**: Slate Blue
- **Gradients**: Multiple combinations untuk visual interest

### Typography

- **Font**: Plus Jakarta Sans
- **Headings**: Bold, 3xl-6xl
- **Body**: Regular, lg-base

### Components

- **Border Radius**: 0.75rem (rounded-xl)
- **Shadows**: Layered shadows untuk depth
- **Spacing**: Consistent 4px grid

## 📞 Contact Information

Update contact info di:

- `src/components/Navbar.tsx` (Top bar)
- `src/components/ContactForm.tsx` (Contact cards)
- `src/components/Footer.tsx` (Footer info)

Current info:

- **Email**: baliwebdevelover@gmail.com
- **WhatsApp**: +62 881-0375-49162
- **Location**: Bali, Indonesia

## 🔧 Configuration

### Environment Variables (Optional)

Create `.env.local` for email functionality:
\`\`\`env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
\`\`\`

### Tailwind Config

Customize colors, fonts, dan utilities di `tailwind.config.ts`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features to Implement

### Recommended Next Steps:

1. **Real Images** - Add actual photos
2. **Blog System** - Content marketing
3. **Booking System** - Online scheduling
4. **Customer Portal** - Account management
5. **Analytics** - Google Analytics
6. **SEO** - Sitemap, structured data
7. **Performance** - Image optimization
8. **Multi-language** - i18n support

## 📊 Performance

- ✅ **Lighthouse Score**: Aim for 90+
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3s
- ✅ **Mobile Friendly**: 100%

## 🔒 Security

- ✅ **Form Validation**: Client & server-side
- ✅ **CSRF Protection**: Built-in Next.js
- ✅ **XSS Prevention**: React auto-escaping
- ✅ **Rate Limiting**: Recommended for production

## 📝 Scripts

\`\`\`bash
npm run dev # Development server
npm run build # Production build
npm run start # Production server
npm run lint # ESLint check
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit changes (\`git commit -m 'Add AmazingFeature'\`)
4. Push to branch (\`git push origin feature/AmazingFeature\`)
5. Open Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

- **Developer**: Antigravity AI
- **Client**: U2CleanPro
- **Version**: 2.0.0 (Enterprise Edition)

## 📞 Support

For support, email baliwebdevelover@gmail.com or contact via WhatsApp.

---

**Built with ❤️ using Next.js and Tailwind CSS**
