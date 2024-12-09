'use server';

import prisma from '@/lib/prisma';
import { PublicNoteSchema } from '@/schema/notes';
import { revalidatePath } from 'next/cache';

export type CreateNoteState = {
  error?: {
    title?: string[];
    content?: string[];
    message?: string[];
  };
  isSuccess?: boolean;
};

export const createPublicNotes = async (
  state: CreateNoteState,
  formData: FormData
): Promise<CreateNoteState> => {
  const validatedFields = PublicNoteSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  try {
    await prisma.public_Note.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
      },
    });
  } catch (error: Error | unknown) {
    return {
      error: { message: [(error as Error).message || 'Failed to create note'] },
      isSuccess: false,
    };
  }

  revalidatePath('/public-notes');
  return { isSuccess: true };
};

export const getPublicNotes = async () => {
  try {
    const res = await prisma.public_Note.findMany({
      orderBy: { updatedAt: 'desc' },
    });

    return res;
  } catch (error) {
    console.error('Failed to fetch notes:', error);
    throw new Error('Could not fetch notes');
  }
};

export const getPublicNote = async (id: string) => {
  try {
    const res = await prisma.public_Note.findUnique({
      where: {
        id,
      },
    });

    return res;
  } catch (error) {
    throw new Error('Could not fetch note', { cause: error });
  }
};
