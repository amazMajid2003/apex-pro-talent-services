

# Header, Logo, Padding, and About Us Improvements

## Summary
This plan covers four key changes: fixing the header to not scroll, reducing padding globally, standardizing the logo size, and enhancing the Mission/Vision sections on the About Us page.

---

## 1. Fix Header - Fully Fixed, Compact Layout

**Current issue:** The top bar scrolls away while the nav is fixed separately, creating an inconsistent experience.

**Changes to `Header.tsx`:**
- Make the entire header (top bar + nav) fixed together using a single `fixed top-0 left-0 right-0 z-50` wrapper
- Reduce logo height from `h-32` to `h-12` for a compact, professional look
- Reduce nav padding from `py-3` to `py-2`
- Reduce top bar padding to `py-1`
- Update all pages' `pt-40` top padding to a smaller value (approx `pt-24`) to account for the now-smaller fixed header

---

## 2. Standardize Logo Size Across the Site

**Current sizes:**
- Header: `h-32` (too large)
- Footer: `h-20`
- Engineering Section: `h-24`

**Change:** Set all logo instances to `h-12` to match the new compact header. Files affected:
- `Header.tsx` - change from `h-32` to `h-12`
- `Footer.tsx` - change from `h-20` to `h-12`
- `EngineeringSection.tsx` - change from `h-24` to `h-12`

---

## 3. Reduce Padding to Half Across the Website

**Changes to `index.css`:**
- `.section-padding`: change from `py-16 md:py-24` to `py-8 md:py-12`

**Changes across all page files** (AboutUs, ForEmployers, ForJobSeekers, Contact, Blog, JobSearch, and section components):
- `py-20` becomes `py-10`
- `py-16` becomes `py-8`
- `py-12` becomes `py-6`
- `py-24` becomes `py-12`
- `px-4 md:px-8` adjustments as needed

---

## 4. Enhance Our Mission and Our Vision Sections (About Us Page)

**Current state:** Plain centered text on white/muted backgrounds -- not visually engaging.

**New design for Mission section:**
- Side-by-side layout: image on the left, text on the right
- Use `diversity-inclusion.jpg` or `people-first.jpg` as the image
- Add `framer-motion` slide-in animations (image slides from left, text from right)
- Add a subtle accent border or decorative element

**New design for Vision section:**
- Side-by-side layout: text on the left, image on the right (reversed)
- Use `warehouse-workers.jpg` or `employment-survey.jpg` as the image
- Add matching slide-in animations (text from left, image from right)
- Staggered fade-in for the heading and paragraph

Both sections will use the existing `grid lg:grid-cols-2 gap-12 items-center` pattern already used elsewhere on the About Us page for visual consistency.

---

## Technical Details

### Files to modify:
1. **`src/components/layout/Header.tsx`** - Fix positioning, reduce padding, reduce logo size
2. **`src/components/layout/Footer.tsx`** - Standardize logo size to `h-12`
3. **`src/components/sections/EngineeringSection.tsx`** - Standardize logo size to `h-12`
4. **`src/index.css`** - Halve `.section-padding` values
5. **`src/pages/AboutUs.tsx`** - Redesign Mission/Vision sections with images and animations, halve section padding
6. **`src/pages/ForEmployers.tsx`** - Halve section padding
7. **`src/pages/ForJobSeekers.tsx`** - Halve section padding
8. **`src/pages/Contact.tsx`** - Halve section padding
9. **`src/pages/Blog.tsx`** - Halve section padding, adjust top padding
10. **`src/pages/JobSearch.tsx`** - Halve section padding
11. **`src/pages/Index.tsx`** - Adjust hero top padding
12. **`src/components/sections/HeroSection.tsx`** - Adjust top padding
13. **Other section components** using `section-padding` class - automatically handled by CSS change

