import { Navbar } from "@/components/mobile-nav";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <div className="w-full px-4  sm:px-8">{children}</div>
    </div>
  );
}
