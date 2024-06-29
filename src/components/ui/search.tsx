import { Input } from '@/components/ui/input';

function Search({
  className,
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
      <svg
        className="pointer-events-none absolute ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <Input
        type="search"
        placeholder="Search..."
        className={`rounded-md border py-2 pl-10 pr-4 focus:ring focus:ring-opacity-50 ${className}`}
        {...props}
      />
    </div>
  );
}
Search.defaultProps = {
  className: '',
};

export default Search;
