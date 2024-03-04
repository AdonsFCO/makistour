"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./Hamburger";
import react, { useState } from "react";
import styles from "./navStyles.module.css";
import SearchBox from "./SearchBar";

export default function Header() {
  const [navIsOpen, setNavOpen] = useState(false);

  return (
    <header className="lg:border-y-4 border-navyBlue shadow-lg font-serif">
      <div className="MOBILE-MENU grid lg:hidden grid-cols-2">
        <Link href="./">
          <Image src="/logo.png" width={100} height={100} />
        </Link>
        <Hamburger
          onClick={() => setNavOpen((prev) => !prev)}
          className="justify-self-end p-4"
        />

        <nav className={navIsOpen ? styles.showMenuNav : styles.hideMenuNav}>
          <Link href="./">
            <Image src="/logo.png" width={100} height={100} />
          </Link>

          <Link href="./sale">Ofertas</Link>

          <Link href="./destinations">Destinos</Link>

          <Link href="./contact">Contacto</Link>

          <div onClick={() => setNavOpen(!navIsOpen)} className="p-5">
            X
          </div>
        </nav>
      </div>

      <div className={"hidden lg:flex flex-col text-white"}>
        <div className="border-y-4 border-navyBlue">
          <div className="bg-navyBlue flex flex-row justify-end p-1 ">
            <div className="pr-32 flex flex-row">
              <h3>Call us:</h3>
              <p class="px-2 text-orange">
                <a href="tel:+18493577580">+1 (849) 357-7580</a>
              </p>
            <SearchBox/>
            </div>
          </div>
        </div>
        <div className=" bg-lightNavyBlue flex justify-between items-center">
          <Link href="./">
            <Image src="/logo.png" width={70} height={70}  className="ms-32"/>
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
              className="px-4 py-2 bg-orange text-white hover:bg-orange-dark"
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
