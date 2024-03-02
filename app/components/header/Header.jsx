"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./hamburger";
import react, { useState } from "react";
import styles from "./navStyles.module.css";

export default function Header() {
  const [navIsOpen, setNavOpen] = useState(false);

  return (
      <header>
        <div className="MOBILE-MENU grid lg:hidden grid-cols-2">
        <Link href="./" >
            <Image src="/logo.png" width={100} height={100}  />
          </Link>
          <Hamburger
            onClick={() => setNavOpen((prev) => !prev)}
            className="justify-self-end p-4"
          />
        

          <nav className={navIsOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <Link href="./">
              <Image src="/logo.png" width={100} height={100} />
            </Link>

            <Link href="./ofertas">Ofertas</Link>

            <Link href="./destinos">Destinos</Link>

            <Link href="./blog">Blog</Link>

            <div onClick={() => setNavOpen(!navIsOpen)} className="p-5">
              X
            </div>
          </nav>
        </div>

        <div className="DESKTOP-HEADER hidden lg:flex flex-col">
     
     
          <div className="border-y-4 border-navyBlue ">
            <div className="bg-navyBlue flex flex-row justify-end">
    
              <div className="px-10 flex flex-row">
              <h2 className="px-2">Call us:</h2>
             
              <h2 className="px-2">+1 (849) 357-7580</h2>
              <div>

              <button>Buscar</button>
              <input type="text" />
              </div>
              </div>
            </div>
          </div>
          <div className=" bg-lightNavyBlue">
            <Link href="./">
              <Image src="/logo.png" width={100} height={100} />
            </Link>
            <nav>
              <Link href="./ofertas">Ofertas</Link>
              <Link href="./destinos">Destinos</Link>
              <Link href="./blog">Blog</Link>
            </nav>
          </div>
        </div>
      </header>
  );
}
