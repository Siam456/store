import Link from 'next/link';

import { cn } from '@/lib/utils';
import sidebar from '@/utils/sidebar';

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {sidebar.map((item, index) => (
        <Link
          key={`${index + 1}`}
          href={item.path}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
