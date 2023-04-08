import { AsideNavbar } from './components/aside/navbar';
// export const metadata = {
//   title: 'Finanças',
//   description: 'Plataforma para controle de finanças pessoais',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="flex">
          <AsideNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
