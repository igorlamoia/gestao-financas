import Link from 'next/link';

interface LiProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  path: string | null;
  icon: React.ReactNode;
}

export function Li({ href, path, children, icon }: LiProps) {
  const active = path === href;
  return (
    <li className="relative">
      <Link
        href={href}
        className={`flex items-center hover:bg-purple-100 gap-x-5 py-3 pr-11
        before:bg-purple-500 before:w-1 before:h-full before:absolute before:rounded-l-md
        ${active ? 'before:block text-purple-500' : 'before:hidden'}
        `}
      >
        <div className="w-[90px] flex justify-center align-middle">{icon}</div>
        {children}
      </Link>
    </li>
  );
}
