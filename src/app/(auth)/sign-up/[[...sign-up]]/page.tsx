import { SignUp } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up to NotesApp',
};

export default function Page() {
  return <SignUp />;
}
