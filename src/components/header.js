import Image from "next/image";
import '@/assets/styles/header.scss';
import NavbarHeader from "./navbar";
import CollapsibleExample from "./navbar";

export function Header() {
  return (
    <CollapsibleExample />
    // <section className="header">
    //   {/* <ul className="info-page">
    //     <li><a className="link1" href="#about-me">Sobre mim</a></li>
    //     <li><a className="link1" href="#skills">Habilidades</a></li>
    //     <li><a className="link1" href="#projects">Projetos</a></li>
    //     <li><a className="link1" href="#contact-me">Fale Comigo</a></li>
    //   </ul> */}
    //   <div >
        
    //   </div>
    // </section>

  );
}