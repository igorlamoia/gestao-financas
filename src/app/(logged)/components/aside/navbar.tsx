'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Li } from './li';

const links = [
  {
    href: '/dashboard',
    label: 'Dashboard',
  },
  {
    href: '/contas',
    label: 'Contas',
  },
  {
    href: '/graficos',
    label: 'Gráficos',
  },
];

export function AsideNavbar() {
  const path = usePathname(); // get the path from the url
  return (
    <aside className="bg-white text-black min-h-screen">
      <nav className="h-full flex flex-col">
        <Image
          src="https://web.mobills.com.br/static/media/LogoNameMobillsLight.bdebb9a4.svg"
          width={150}
          height={40}
          alt="Logo"
          className="p-4"
        />
        <ul>
          {links.map(({ href, label }) => (
            <Li key={href} href={href} path={path}>
              {label}
            </Li>
          ))}
        </ul>
        <div className="mt-auto flex justify-center gap-3">
          <Image
            src="https://www.svgrepo.com/show/507735/help-circle.svg"
            width={20}
            height={20}
            alt="Settings"
          />
          <p>Central de Ajuda</p>
        </div>
      </nav>
    </aside>
  );
}
