import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { NoteCategory } from '@prisma/client';
import { redirect } from 'next/navigation';

export const getNotes = async (category?: NoteCategory) => {
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
