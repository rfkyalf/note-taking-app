import PublicNotesNavbar from '@/components/public-notes/PublicNotesNavbar';
import Wrapper from '@/components/Wrapper';

export default function PublicNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 min-h-screen flex flex-col">
      <PublicNotesNavbar />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
