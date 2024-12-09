import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign In to NotesApp',
};

export default function Page() {
  return <SignIn />;
}
