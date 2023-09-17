import { ReactNode, FunctionComponent, createContext, useState } from "react";

interface SearchProps {
  searchTerm: string;
  setTermChanged: undefined | ((searchTerm: string) => void);
}

const SearchContext = createContext<SearchProps>({
  searchTerm: "",
  setTermChanged: undefined,
});

const SearchProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [term, setTerm] = useState<string>("");

  const setTermChanged = (searchTerm: string) => {
    console.log(searchTerm);
    setTerm(searchTerm);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm: term,
        setTermChanged: setTermChanged,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
export { SearchContext };
