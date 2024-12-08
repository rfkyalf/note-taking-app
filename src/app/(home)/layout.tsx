import HomeNavbar from '@/components/home/HomeNavbar';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <HomeNavbar />
      <Wrapper className="min-h-screen">{children}</Wrapper>
      <footer className="border-t border-neutral-300 py-4 flex justify-center">
        <p className="text-[0.9rem] text-neutral-700">
          Created by{' '}
          <Link
            href="https://www.rifkyalfarez.my.id"
            className="font-bold hover:underline"
          >
            Rifky Alfarez
          </Link>
        </p>
      </footer>
    </div>
  );
}
