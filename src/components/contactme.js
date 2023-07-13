import SendIcon from '@mui/icons-material/Send';
import { SocialIcon } from "react-social-icons";
import { Button, Form } from "react-bootstrap";
import '@/assets/styles/contactme.scss'
import { useState } from "react";

import emailjs from '@emailjs/browser'
import { resolve } from 'styled-jsx/css';

export function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mensage, setMensage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || mensage ===''){
      alert("Preencha todos os campos");
      return;
    }
    
    const templateParms ={
      from_name: name,
      mensage: mensage,
      email: email,
    }

    emailjs.send("service_t4ot5zb", "template_v05lr4n", templateParms, "bd5rI-gnY-mro5VWu")
    .then((response)=> {
      console.log("EMAIL ENVIADO", response.status, resolve.text)
      setName('')
      setEmail('')
      setMensage('')
    }, (err)=>{
      console.log('ERRO: ', err)
    })
  }

  return (
    <section className="contact-me" id="contact-me">
      <h1 className="title">Fale comigo!</h1>
      <div className="form">
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Seu Nome" value={name} onChange={(e)=>setName(e.target.value)}/>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Escreva sua mensagem aqui!</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Digitem aqui sua mensagem" value={mensage} onChange={(e)=>setMensage(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" size="lg" className="bnt-submit" type="submit">
          Envia <SendIcon style={{marginLeft:10}}/>
        </Button>{' '}
        </Form>
      </div>



      <div className="social-midia">
        <SocialIcon url='https://www.linkedin.com/in/samuel-maximo/' target='blank' />
        <SocialIcon url='https://mail.google.com/mail/u/2/#inbox?compose=CllgCHrkVQJGFTptNlnKQcXTnSVRDMgClKBQvdrBbgRpkTxNxPzKLlHnwJtqSmlSXKvljNHpnMg' target='blank' />
        <SocialIcon url='https://github.com/samuelmaxi' target='blank' bgColor="white" />
      </div>
    </section>
  );
}