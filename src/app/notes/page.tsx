import GreetingsSection from '@/components/notes/GreetingsSection';
import NoteList from '@/components/notes/NoteList';
import Wrapper from '@/components/Wrapper';

export default function page() {
  return (
    <Wrapper className="min-h-screen flex flex-col gap-y-2 md:gap-y-4 py-2 md:py-4">
      <GreetingsSection />
      <NoteList />
    </Wrapper>
  );
}
