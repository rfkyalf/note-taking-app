'use server';

import prisma from '@/lib/prisma';
import { PrivateNoteSchema } from '@/schema/notes';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type CreateNoteState = {
  error?: {
    title?: string[];
    content?: string[];
    category?: string[];
    message?: string[];
  };
  isSuccess?: boolean;
};

export const createPrivateNotes = async (
  state: CreateNoteState,
  formData: FormData
): Promise<CreateNoteState> => {
  const validatedFields = PrivateNoteSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  const user = await currentUser();

  if (!user) redirect('/sign-in');

  try {
    await prisma.private_Note.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        category: validatedFields.data.category,
        user_id: user.id,
      },
    });
  } catch (error: Error | unknown) {
    return {
      error: { message: [(error as Error).message || 'Failed to create note'] },
      isSuccess: false,
    };
  }

  revalidatePath('/notes');
  return { isSuccess: true };
};
