import Link from 'next/link';

interface LiProps {
  href: string;
  imagePath?: string;
  children: React.ReactNode;
  active?: boolean;
  path: string | null;
  svg?: React.ReactNode;
}

export function Li({ href, imagePath, path, children, svg }: LiProps) {
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
        <div className="w-[90px] flex justify-center align-middle">
          {svg ? (
            svg
          ) : (
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>

        {children}
      </Link>
    </li>
  );
}
