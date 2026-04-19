---
project: "Astro Digital Garden Architecture"
date: 2026-04-19
tags: ["astro", "frontend", "typescript", "tailwind"]
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
---

Today I successfully ripped out the old complex setup and migrated the entire Digital Garden to **Astro**. 

The goal was to have a lightning-fast, content-focused site without shipping megabytes of JavaScript to the client just to render static blog posts. 

### Key Technical Decisions:
*   **Astro Content Collections:** Using `zod` for strict typing on all markdown frontmatter has been a lifesaver. No more runtime errors because I forgot a property in a markdown file.
*   **Tailwind CSS:** Implementing a highly customized `surface-container` layered design system instead of relying on borders. It gives it a much cleaner, editorial feel.
*   **Algorithmic Scoring:** Built a standalone utility to calculate weighted scores for food reviews based on the identity of the reviewer (Josie vs. Sammy) and the type of establishment.

Next step: setting up a headless CMS for easier editing!
