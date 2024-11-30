"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-all duration-300" />
      </div>
      <input
        type="text"
        placeholder="Search your expenses by description..."
        className="
          w-full 
          pl-12 
          pr-4 
          py-3 
          bg-gray-50 
          border 
          border-gray-300 
          rounded-full 
          focus:ring-2 
          focus:ring-indigo-500 
          focus:outline-none 
          text-gray-700 
          placeholder-gray-400 
          shadow-sm 
          hover:shadow-md 
          transition-all 
          duration-300
        "
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
