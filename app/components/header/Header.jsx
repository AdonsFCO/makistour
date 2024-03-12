"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Burger";
import react, { useState } from "react";
import styles from "./navStyles.module.css";
import SearchBox from "./SearchBar";

export default function Header() {
  const [navIsOpen, setNavOpen] = useState(false);

  return (
    <header className="lg:border-y-4 border-navyBlue shadow-lg font-serif">
      <div className="MOBILE-MENU grid lg:hidden grid-cols-2">
        <Link href="./" aria-label="ir a pagina principal">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Link>
        <Hamburger
          onClick={() => setNavOpen((prev) => !prev)}
          className="justify-self-end px-16"
          ariaExpanded={navIsOpen} //depending if the nav is open or not will update this value 
        />

        <nav className={navIsOpen ? styles.showMenuNav : styles.hideMenuNav}>
          <Link href="./">
            <Image
              src="/logo.png"
              aria-label="ir a pagina principal"
              alt="logo"
              width={100}
              height={100}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>

          <Link href="./sale">Ofertas</Link>

          <Link href="./destinations">Destinos</Link>

          <Link href="./contact">Contacto</Link>

          <div onClick={() => setNavOpen(!navIsOpen)} className="p-5" aria-label="Salir del menu" role="button">
            Salir
          </div>
        </nav>
      </div>

      <div className={"hidden lg:flex flex-col text-white fixed top-0 fixed top-0 left-0 right-0 z-50 opacity-90"}>
        <div className="border-y-4 border-navyBlue">
          <div className="bg-navyBlue flex flex-row justify-end p-1 ">
            <div className="pr-32 flex flex-row">
              <h3>Llamanos!:</h3>
              <p className="px-2 text-orange">
                <a href="tel:+18493577580">+1 (849) 357-7580</a>
              </p>
            <SearchBox/>
            </div>
          </div>
        </div>
        <div className=" bg-lightNavyBlue flex justify-between items-center">
          <Link href="./">
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={70}
              aria-label="ir a pagina principal"
              className="ms-32"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
          <nav
            aria-label="Navegación principal"
            aria-labelledby="nav-title"
            className="pr-32"
          >
            <Link
              href="./"
              aria-current="page"
              className="px-4 hover:text-orange"
            >
              Home
            </Link>
            <Link
              href="./sale"
              aria-current="page"
              className="px-4 hover:text-orange"
            >
              Ofertas
            </Link>
            <Link href="./destinations" className="px-4 hover:text-orange">
              Destinos
            </Link>
            <Link
              href="./contact"
              className="px-4 py-2 bg-orange text-black hover:bg-orange-dark"
              aria-expanded="false"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
