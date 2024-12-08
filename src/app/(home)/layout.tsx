import HomeNavbar from '@/components/home/HomeNavbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <HomeNavbar />
      {children}
    </div>
  );
}
