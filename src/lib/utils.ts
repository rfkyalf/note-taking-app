import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
