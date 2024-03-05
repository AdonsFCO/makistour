import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-gray-900 text-gray-200 p-4 items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Makis Tour logo" width={70} height={70} />
      </Link>
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 mt-4 md:mt-0">
        <Link href="./privacy" className="text-sm hover:underline">
          Política de privacidad
        </Link>
        <Link href="./about" className="text-sm hover:underline">
          Nosotros
        </Link>
        <a href="tel:+18493577580" aria-label="Llamanos!" className="text-sm hover:underline">
          +1 (849) 357-7580
        </a>
        <span className="text-xs">
          © 2024 Makistour. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
