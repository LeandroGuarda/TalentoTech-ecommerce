

import InstagramIcon from "@mui/icons-material/Instagram";
import FooterMenuItem from "../components/utils/FooterMenuItem";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

 
const Footer = () => {
  return (
    <footer className=" bg-slate-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Información de la empresa */}
        <div>
          <h2 className="text-xl font-semibold">Sobre Nosotros</h2>
          <p className="text-sm mt-2">
            En Jacinto Shop nos apasiona ofrecer productos de calidad que mejoran tu vida. Encuentra las últimas novedades y disfruta de una experiencia de compra segura y confiable.


          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Menú</h2>
          <ul className="mt-2 space-y-2">
            <FooterMenuItem href="/" item="Inicio" />
            <FooterMenuItem href="/contacto" item="Contacto" />
            <FooterMenuItem href="/sobre-nosotros" item="Sobre Nosotros" />
            <FooterMenuItem href="/servicios" item="Galeria" />
            
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Contáctanos</h2>
          <p className="text-sm mt-2">Correo: leandro.guarda86@gmail.com</p>
          <p className="text-sm">Teléfono: +54 9 11 1234 5678</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/"
              className="text-amber-200 hover:text-white"
              aria-label="Instagram"
              target="_BLANK"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://www.tiktok.com/"
              className="text-amber-300 hover:text-white"
              aria-label="TikTok"
                target="_BLANK"
            >
                <FaTiktok size={30} className="my-auto" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary mt-8 pt-4 text-center">
        <p className="text-sm text-primary">
         Leandro R. Guarda. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
