import { AsideNavbar } from './components/aside/navbar';
export const metadata = {
  title: 'Finanças',
  description: 'Plataforma para controle de finanças pessoais',
};

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
          <section className="p-4">{children}</section>
        </main>
      </body>
    </html>
  );
}
