/* eslint-disable react/no-unescaped-entities */
import { React } from 'react'
import '@/assets/styles/aboutme.scss'
import Image from 'next/image';
export function AboutMe() {
  return (
    <section className="about-me">
      <div className="text">
        <h1 className='title'>Olá, eu sou Samuel Máximo</h1>
        <p className='content'>
          <p>🧑‍💻Sou um estudante de programação e apaixonado por tecnologia.</p>
          <p>🎓Cursando Sistemas de Informação na UNINASSAU.</p>
          <p>💡Interesse em linguagens Back-end.</p>
          <p>🚀Busco um oportunidade em desenvolvimento na area de back-end.</p>
        </p>
      </div>
      <div className="image">
        <Image
          src="/icon-perfil.jpg"
          alt="Perfil icon"
          width={250}
          height={250}
          // style={{ borderRadius: '10px'}}
        />
        <button id='btn-cv'>
          <a href="../template/Currículo - Samuel Máximo de Araújo Neto_220506_154058.pdf" download={"../template/Currículo - Samuel Máximo de Araújo Neto_220506_154058.pdf"}>Download</a>
        </button>
      </div>

    </section>
  );
}