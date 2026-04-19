import { z, defineCollection } from 'astro:content';

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['restaurant', 'cafe', 'album', 'media', 'cinema', 'anime']),
    image: z.string().optional(),
    location: z.string().optional(),
    
    // Ratings
    ratings: z.object({
      josie: z.object({
        overall: z.number().min(1).max(10).optional(), // For media
        taste: z.number().min(1).max(10).optional(), // Food/cafe
        ambiance: z.number().min(1).max(10).optional(), // Food/cafe
        originality: z.number().min(1).max(10).optional(), // Food/cafe
        vibe: z.number().min(1).max(10).optional(), // Album
        production: z.number().min(1).max(10).optional(), // Album
        technicality: z.number().min(1).max(10).optional(), // Album
      }),
      partner: z.object({
        overall: z.number().min(1).max(10).optional(),
        taste: z.number().min(1).max(10).optional(),
        ambiance: z.number().min(1).max(10).optional(),
        originality: z.number().min(1).max(10).optional(),
      }).optional(),
    })
  })
});

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    prepTime: z.number(), // in minutes
    ingredients: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  })
});

const buildLogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    project: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  })
});

export const collections = {
  'cafes': reviewsCollection,
  'food': reviewsCollection,
  'media': reviewsCollection,
  'recipes': recipesCollection,
  'logs': buildLogsCollection,
  'music': buildLogsCollection,
};
