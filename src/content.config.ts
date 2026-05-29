import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.url().optional(),
  }),
});

export const collections = {
  projects,
};
