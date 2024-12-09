import { z } from 'zod';

export const PrivateNoteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: 'Title is required' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  content: z
    .string()
    .trim()
    .min(1, { message: 'Content is required' })
    .max(5000, {
      message: 'Content must be less than 5000 characters',
    }),
  category: z.enum(['HOME', 'JOB', 'PERSONAL'], {
    required_error: 'Category is required',
  }),
});

export const PublicNoteSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: 'Title is required' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  content: z
    .string()
    .trim()
    .min(1, { message: 'Content is required' })
    .max(5000, {
      message: 'Content must be less than 5000 characters',
    }),
});
