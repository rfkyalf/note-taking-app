import { z } from 'zod';

export const PrivateNoteSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  content: z.string().min(1, { message: 'Content is required' }),
  category: z.enum(['HOME', 'JOB', 'PERSONAL'], {
    required_error: 'Category is required',
  }),
});

export const PublicNoteSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  content: z.string().min(1, { message: 'Content is required' }),
});
