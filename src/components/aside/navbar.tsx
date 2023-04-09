import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  ChartPieIcon,
  ChartBarIcon,
  FireIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';

import { Li } from './li';

const links = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: <ChartPieIcon width="20" />,
  },
  {
    href: '/dashboard/principal',
    label: 'Principal',
    icon: <FireIcon width="20" />,
  },
  {
    href: '/dashboard/contas',
    label: 'Contas',
    icon: <WalletIcon width="20" />,
  },
  {
    href: '/dashboard/graficos',
    label: 'Gráficos',
    icon: <ChartBarIcon width="20" />,
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
          {links.map(({ href, label, icon }) => (
            <Li key={href} href={href} path={path} icon={icon}>
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
