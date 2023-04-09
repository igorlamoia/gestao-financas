import { usePathname } from 'next/navigation';

import { AsideNavbar } from '@/components/aside/navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  // verify if the route starts with /dashboard
  const isDashboard = path?.startsWith('/dashboard');
  if (!isDashboard) return <>{children}</>;

  return (
    <main className="flex">
      <AsideNavbar />
      <section className="p-4">{children}</section>
    </main>
  );
}
