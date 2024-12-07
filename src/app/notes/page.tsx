import GreetingsSection from '@/components/notes/GreetingsSection';
import TabsNote from '@/components/notes/TabsNote';
import Wrapper from '@/components/Wrapper';

export default function NotesPage() {
  return (
    <Wrapper className="min-h-screen flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6 py-4 md:py-5 lg:py-6">
      <GreetingsSection />
      <TabsNote />
    </Wrapper>
  );
}
