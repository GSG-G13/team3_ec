import './homeLayout.css'
import { Nav } from '../components/Nav/nav';
// import { Filter } from "../pages/Filter";
import { Outlet } from 'react-router-dom';
import { useState } from "react";

export const HomeLayout = () => {

  return (
    <>
      <header>
        <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
      <main className='main-page'>
        <Outlet context={searchValue} />
      </main>
    </>
  );
};
