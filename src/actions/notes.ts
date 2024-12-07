'use server';

import prisma from '@/lib/prisma';
import { PrivateNoteSchema } from '@/schema/notes';
import { currentUser } from '@clerk/nextjs/server';
import { NoteCategory } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type CreateNoteState = {
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

export const getPrivateNotes = async (category?: NoteCategory) => {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  try {
    const res = await prisma.private_Note.findMany({
      where: {
        user_id: user.id,
        ...(category ? { category } : {}),
      },
      orderBy: { updatedAt: 'desc' },
    });

    return res;
  } catch (error) {
    console.error('Failed to fetch notes:', error);
    throw new Error('Could not fetch notes');
  }
};

export const deletePrivateNote = async (id: string) => {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  try {
    await prisma.private_Note.delete({
      where: {
        id,
        user_id: user?.id,
      },
    });
  } catch (error: unknown) {
    return {
      error: { message: (error as Error).message, isSuccess: false },
    };
  }

  revalidatePath('/notes');
};

export async function updateNote(
  id: string,
  state: CreateNoteState,
  formData: FormData
): Promise<CreateNoteState> {
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
    await prisma.private_Note.update({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        category: validatedFields.data.category,
      },
      where: { id, user_id: user.id },
    });
  } catch (error) {
    return { error: { message: [(error as Error).message] }, isSuccess: false };
  }

  revalidatePath('/notes');
  return { isSuccess: true };
}

export const getPrivateNote = async (id: string) => {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  try {
    const res = await prisma.private_Note.findUnique({
      where: {
        id,
        user_id: user.id,
      },
    });

    return res;
  } catch (error) {
    throw new Error('Could not fetch note', { cause: error });
  }
};
