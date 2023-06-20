import Image from "next/image";
import '../styles/header.scss'

export function Header(){
  return(
    <section className="header">
        <div className="icon">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
          />
        </div>
        <ul className="info-page">
          <li><a href="">About Me</a></li>
          <li><a href="">Skils</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact Me</a></li>
        </ul>
      </section>

  );
}