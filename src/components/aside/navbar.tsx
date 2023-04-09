import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Li } from './li';

const links = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    svg: (
      <>
        <svg
          className="-mr-1 h-5 w-5 "
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </>
    ),
  },
  {
    href: '/dashboard/principal',
    label: 'Principal',
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
          {links.map(({ href, label, svg }) => (
            <Li key={href} href={href} path={path} svg={svg}>
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
