import Image from 'next/image';
import Link from 'next/link';

interface LiProps {
  href: string;
  imagePath?: string;
  children: React.ReactNode;
  active?: boolean;
  path: string | null;
}

export function Li({ href, imagePath, path, children }: LiProps) {
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
        <div className="w-[90px] flex justify-center">
          <Image src="/bank.svg" alt="Logo" width={25} height={25} />
        </div>
        {children}
      </Link>
    </li>
  );
}
