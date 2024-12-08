import HomeNavbar from '@/components/home/HomeNavbar';
import Wrapper from '@/components/Wrapper';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <HomeNavbar />
      <Wrapper className="min-h-screen">{children}</Wrapper>
    </div>
  );
}
