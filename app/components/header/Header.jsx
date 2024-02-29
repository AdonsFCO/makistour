import Image from "next/image"
import Link from "next/link"
import Hamburger from "./hamburger"

export default function Header() {
    return (<header>
                 <Hamburger />
            <div className="border-y-4 border-navyBlue">
                <div className="bg-navyBlue">
                <h2>
                    Call us:
                </h2>
                <h2>+1 (849) 357-7580</h2>
                <button>
                    Buscar
                </button>
                    <input type="text"/>
                </div>

            </div>
            <div className=" bg-lightNavyBlue">
            <Image src="/logo.png" width={100} height={100}/>
            <nav>
                <Link href="./ofertas">Ofertas</Link>
                <Link href="./destinos">destinos</Link>
                <Link href="./blog">blog</Link>

            </nav>
            </div>
    
    </header>)


}
