import "./homeLayout.css";
import { Nav } from "../components/Nav/Nav";
// import { Filter } from "../pages/Filter";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
export const SearchContext = createContext();
export const HomeLayout = () => {
  const [searchValue, setSearchValue] = useState('')
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <header>
        <Nav searchValue={searchValue} setSearchValue={setSearchValue} cartCount={cartCount} setCartCount={setCartCount} />
      </header>
      <main className="main-page">
        <SearchContext.Provider value={searchValue}>
            <Outlet context={[cartCount, setCartCount]} />
        </SearchContext.Provider>
      </main>
    </>
  );
};
