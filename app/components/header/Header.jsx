"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";
import react, { useState } from "react";
import styles from './navStyles.module.css'

export default function Header() {
  const [navIsOpen, setNavOpen] = useState(false);

  return (
    <>
      <header>
        <div className="MOBILE-MENU flex lg:hidden">
          <Image src="/logo.png" width={100} height={100} />
          <Hamburger onClick={() => setNavOpen((prev) => !prev)} />

          <nav className={navIsOpen ? styles.showMenuNav : styles.hideMenuNav }>
            <Link href="./ofertas">Ofertas</Link>
            <Link href="./destinos">destinos</Link>
            <Link href="./blog">blog</Link>
            <div onClick={ () => setNavOpen(!navIsOpen)}>X</div>
          </nav>
        </div>

        <div className="DESKTOP-HEADER hidden lg:flex">
          <div className="border-y-4 border-navyBlue">
            <div className="bg-navyBlue">
              <h2>Call us:</h2>
              <h2>+1 (849) 357-7580</h2>
              <button>Buscar</button>
              <input type="text" />
            </div>
          </div>
          <div className=" bg-lightNavyBlue">
            <Link href="./">
              <Image src="/logo.png" width={100} height={100} />
            </Link>
            <nav>
              <Link href="./ofertas">Ofertas</Link>
              <Link href="./destinos">destinos</Link>
              <Link href="./blog">blog</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
