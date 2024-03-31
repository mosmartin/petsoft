"use client";

import { createContext, useCallback, useMemo, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (query: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: Readonly<SearchContextProviderProps>) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChangeSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const contextValue = useMemo(
    () => ({
      searchQuery,
      handleChangeSearchQuery,
    }),
    [searchQuery, handleChangeSearchQuery]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
