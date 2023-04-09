import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Li } from './li';

const links = [
  {
    href: '/dashboard/principal',
    label: 'Dashboard',
  },
  {
    href: '/dashboard/contas',
    label: 'Contas',
  },
  {
    href: '/dashboard/graficos',
    label: 'Gráficos',
  },
];

export function AsideNavbar() {
  const path = usePathname(); // get the path from the url
  return (
    <aside className="bg-white text-black min-h-screen">
      <nav className="h-full flex flex-col">
        <Link href="/home">
          <Image
            src="/bank.svg"
            width={150}
            height={40}
            alt="Logo"
            className="p-4"
          />
        </Link>
        <ul>
          {links.map(({ href, label }) => (
            <Li key={href} href={href} path={path}>
              {label}
            </Li>
          ))}
        </ul>
        <div className="mt-auto flex justify-center gap-3">
          <Image src="/vercel.svg" width={20} height={20} alt="Settings" />
          <p>Central de Ajuda</p>
        </div>
      </nav>
    </aside>
  );
}
