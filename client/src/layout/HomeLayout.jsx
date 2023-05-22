import './homeLayout.css'
import { Nav } from "../components/Nav/Nav";
import { Filter } from "../pages/Filter";

export const HomeLayout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='main-page'>
        <Filter />
        <div className="products-list">Hello</div>
      </main>
    </>
  );
};
