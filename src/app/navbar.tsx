import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Li } from './dashboard/components/aside/li';

export function AsideNavbar() {
  const activeSegment = useSelectedLayoutSegment();
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
          <Li active={activeSegment === 'home'} href="/home">
            Home
          </Li>
          <Li active={activeSegment === 'dashboard'} href="/dashboard">
            Dashboard
          </Li>
          <Li active={activeSegment === 'contas'} href="/contas">
            Contas
          </Li>
          <Li active={activeSegment === 'graficos'} href="/graficos">
            Gráficos
          </Li>
        </ul>
        <div className="mt-auto flex justify-center gap-3">
          {/* svg settings */}
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
