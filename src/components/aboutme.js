/* eslint-disable react/no-unescaped-entities */
import { React } from 'react'
import '@/assets/styles/aboutme.scss'
import Image from 'next/image';
import { Button } from 'react-bootstrap';



export function AboutMe() {
  return (
    <section className="about-me" id='about-me'>
      <div className="text">
        <h1 className='title'>Olá, eu sou Samuel Máximo</h1>
        <span className='content'>
          <span>🧑‍💻Sou um estudante de programação e apaixonado por tecnologia.</span> <br />
          <br />
          <span>🎓Cursando Sistemas de Informação na UNINASSAU.</span> <br />
          <br />
          <span>💡Interesse em linguagens Back-end.</span> <br />
          <br />
          <span>🚀Busco um oportunidade em desenvolvimento na area de back-end.</span> <br />
        </span>
      </div>
      <div className="image">
        <Image
          src="/icon-perfil.jpg"
          alt="Perfil icon"
          width={250}
          height={250}
        />
        <div className='btn-cv'>
          <Button variant="outline-info" href='https://drive.google.com/file/d/1j6DKKxpP8UGsRrcbdOPdlcrnHTExn8Ys/view?usp=drive_link' target='blanck'>Download CV</Button>
        </div>
      </div>

    </section>
  );
}