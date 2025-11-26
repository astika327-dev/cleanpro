# 🚀 Quick Reference Guide - U2CleanPro

## 📞 Update Contact Information

### Locations to Update:

1. **Navbar** (`src/components/Navbar.tsx`)

   - Line ~39-47: Top bar contact info

2. **ContactForm** (`src/components/ContactForm.tsx`)

   - Line ~62-87: Contact info cards

3. **Footer** (`src/components/Footer.tsx`)
   - Line ~68-88: Contact section

### Current Info:

```
Email: baliwebdevelover@gmail.com
WhatsApp: +62 881-0375-49162
Location: Bali, Indonesia
Hours: Senin - Minggu: 08:00 - 17:00
```

---

## 🎨 Update Colors

**File**: `src/app/globals.css`

### Primary Color (Green):

```css
--primary: 158 64% 32%;
```

### Secondary Color (Slate):

```css
--secondary: 215 25% 27%;
```

### Change to different color:

Use HSL format: `Hue Saturation% Lightness%`

---

## 📝 Update Services

**File**: `src/components/ServicesSection.tsx`

**Lines**: 8-40 (services array)

### Add New Service:

```typescript
{
  icon: YourIcon,
  title: 'Service Name',
  description: 'Service description',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  color: 'from-blue-500 to-cyan-500',
}
```

---

## 💬 Update Testimonials

**File**: `src/components/Testimonials.tsx`

**Lines**: 7-60 (testimonials array)

### Add New Testimonial:

```typescript
{
  name: 'Customer Name',
  role: 'Customer Role',
  review: 'Review text here...',
  rating: 5,
  avatar: 'CN', // Initials
}
```

---

## ❓ Update FAQ

**File**: `src/components/FAQSection.tsx`

**Lines**: 8-72 (faqs array)

### Add New Question:

```typescript
{
  q: 'Your question?',
  a: 'Your answer here...',
}
```

### Add New Category:

```typescript
{
  category: 'Category Name',
  questions: [
    { q: 'Question 1?', a: 'Answer 1' },
    { q: 'Question 2?', a: 'Answer 2' },
  ],
}
```

---

## 💰 Update Pricing

**File**: `src/components/PricingSection.tsx`

**Lines**: 8-60 (packages array)

### Modify Package:

```typescript
{
  name: 'Package Name',
  icon: IconName,
  price: 'Price Text',
  description: 'Description',
  features: ['Feature 1', 'Feature 2'],
  color: 'from-blue-500 to-cyan-500',
  popular: true/false,
}
```

---

## 🖼️ Update Images

### Hero Image:

**Path**: `/public/images/hero-image.jpg`

**Used in**:

- `src/components/Hero.tsx`
- `src/components/AboutSection.tsx`

### Add New Images:

1. Place in `/public/images/`
2. Import in component:

```typescript
import Image from "next/image";

<Image
  src="/images/your-image.jpg"
  alt="Description"
  fill
  className="object-cover"
/>;
```

---

## 📄 Update Page Metadata

**Location**: Each page file (e.g., `src/app/about/page.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Page Title - U2CleanPro",
  description: "Page description for SEO",
};
```

---

## 🎯 Update Statistics

### Homepage Hero:

**File**: `src/components/Hero.tsx`

- Line ~95-97: "500+" projects badge

### Testimonials:

**File**: `src/components/Testimonials.tsx`

- Line ~138-145: Stats grid (500+, 4.9/5, 98%, 24/7)

### About Page:

**File**: `src/components/AboutSection.tsx`

- Line ~34-39: Stats cards

---

## 🔗 Update Navigation Links

**File**: `src/components/Navbar.tsx`

**Lines**: 24-31 (navLinks array)

### Add/Remove Link:

```typescript
{ href: '/path', label: 'Label' }
```

---

## 🎨 Update Gradient Colors

Common gradient combinations used:

```typescript
// Blue
"from-blue-500 to-cyan-500";

// Green (Primary)
"from-primary to-emerald-600";
"from-green-500 to-emerald-500";

// Purple
"from-purple-500 to-pink-500";

// Orange
"from-orange-500 to-red-500";
```

---

## 📱 Update Social Media Links

**File**: `src/components/Footer.tsx`

**Lines**: ~88-98 (Social media section)

```typescript
<a href="https://facebook.com/your-page" ...>
<a href="https://instagram.com/your-account" ...>
<a href="https://linkedin.com/company/your-company" ...>
```

---

## 🚀 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Lint code
npm run lint

# Install dependencies
npm install
```

---

## 🐛 Troubleshooting

### Build Errors:

1. Delete `.next` folder
2. Run `npm install`
3. Run `npm run build`

### Image Not Showing:

1. Check file path in `/public/images/`
2. Verify file extension (jpg, png, webp)
3. Check Image component syntax

### Styling Issues:

1. Check Tailwind classes
2. Verify `globals.css` is imported
3. Clear browser cache

---

## 📦 Component Quick Reference

| Component       | Purpose           | Location                             |
| --------------- | ----------------- | ------------------------------------ |
| Navbar          | Header navigation | `src/components/Navbar.tsx`          |
| Hero            | Homepage hero     | `src/components/Hero.tsx`            |
| FeaturesSection | Key benefits      | `src/components/FeaturesSection.tsx` |
| ServicesSection | Services grid     | `src/components/ServicesSection.tsx` |
| ProcessSection  | How it works      | `src/components/ProcessSection.tsx`  |
| Testimonials    | Customer reviews  | `src/components/Testimonials.tsx`    |
| CTA             | Call to action    | `src/components/CTA.tsx`             |
| Footer          | Site footer       | `src/components/Footer.tsx`          |
| AboutSection    | About content     | `src/components/AboutSection.tsx`    |
| ContactForm     | Contact form      | `src/components/ContactForm.tsx`     |
| FAQSection      | FAQ accordion     | `src/components/FAQSection.tsx`      |
| PricingSection  | Pricing tiers     | `src/components/PricingSection.tsx`  |

---

## 🎨 Icon Reference

Using **Lucide React** icons:

```typescript
import { IconName } from "lucide-react";

// Common icons:
Home, Building, Construction, Sparkles;
Phone, Mail, MapPin, Clock;
Star, CheckCircle, ArrowRight;
Shield, Award, Leaf, Users;
```

Browse all icons: [lucide.dev](https://lucide.dev)

---

## 📞 Need Help?

- **Email**: baliwebdevelover@gmail.com
- **WhatsApp**: +62 881-0375-49162
- **Documentation**: See README.md and UPGRADE_SUMMARY.md

---

**Last Updated**: 2025-11-26
**Version**: 2.0.0
