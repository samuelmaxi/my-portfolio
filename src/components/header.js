import Image from "next/image";
import '@/assets/styles/header.scss';

export function Header(){
  return(
    <section className="header">
        <div className="icon">
          {/* <Image
            src="/icon-perfil.jpg"
            alt="Perfil icon"
            width={50}
            height={50}
            style={{borderRadius: '10px', marginLeft: '10px'}}
          /> */}
        </div>
        <ul className="info-page">
          <li><a href="#about-me">Sobre mim</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact-me">Fale Comigo</a></li>
        </ul>
      </section>

  );
}