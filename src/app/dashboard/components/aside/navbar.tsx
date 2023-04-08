import Image from "next/image";
import { Li } from "./li";

export function AsideNavbar() {
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
          <Li href="/home">Home</Li>
          <Li href="/dashboard">Dashboard</Li>
          <Li href="/contas">Contas</Li>
          <Li href="/graficos">Gráficos</Li>
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
