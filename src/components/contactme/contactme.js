import { Button, Card, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { SocialIcon } from "react-social-icons";

export function ContactMe() {
  return (
    <section className="contact-me">
      <h1>Fale comigo!</h1>
      <div className="form">
        <TextField
          id="filled-name-flexible"
          label="Seu nome"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-lasname-flexible"
          label="Seu sobrenome"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-description-static"
          label="Mensagem"
          multiline
          rows={4}
          variant="filled"
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </div>
      <div className="social-midia">
        <SocialIcon url='https://www.linkedin.com/in/samuel-m%C3%A1ximo-5329a5239/' target='blank' />
        <SocialIcon url='https://mail.google.com/mail/u/2/#inbox?compose=CllgCHrkVQJGFTptNlnKQcXTnSVRDMgClKBQvdrBbgRpkTxNxPzKLlHnwJtqSmlSXKvljNHpnMg' target='blank' />
        <SocialIcon url='https://github.com/samuelmaxi' target='blank' />
      </div>
    </section>
  );
}