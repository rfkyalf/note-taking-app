import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import moment from 'moment';
import { NoteCategory } from '@prisma/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const greetings = () => {
  const time = new Date().getHours();

  if (time < 12) {
    return 'Good Morning';
  } else if (time < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

export function formatRelativeDate(date: string) {
  const now = moment();
  const createdAt = moment(date);
  const diffInMinutes = now.diff(createdAt, 'minutes');
  const diffInHours = now.diff(createdAt, 'hours');
  const diffInDays = now.diff(createdAt, 'days');

  if (diffInMinutes < 1) {
    return 'just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays <= 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else {
    return createdAt.format('HH:mm MMM D, YYYY');
  }
}

export const categoryColor = (category: NoteCategory) => {
  switch (category) {
    case 'HOME':
      return 'bg-violet-300';
    case 'JOB':
      return 'bg-rose-300';
    case 'PERSONAL':
      return 'bg-blue-300';
  }
};
