import Card from 'react-bootstrap/Card';
import '@/assets/styles/projects.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, CardGroup, Carousel, Image } from "react-bootstrap";
import { SiPython, SiGithub, SiDjango } from 'react-icons/si'


const LinkPage = () => {
  console.log('ola')
}


function CardProject(props) {
  return (
    <Card style={{ width: '18rem', minHeight: '10px', minWidth: '1px' }} bg={props.colorborder}>
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.link1} style={{ fontWeight: 'bold' }} target='black' >{props.nameLink1}</Card.Link>
        <Card.Link href={props.link2} style={{ fontWeight: 'bold' }} target='black'>{props.nameLink2}</Card.Link>
      </Card.Body>
      <Card.Footer>
        <Badge bg="light" text="dark">
          {props.simbol}
          {props.simbol2}
          {props.simbol3}
        </Badge>
      </Card.Footer>
    </Card>
  );
}

function CardGropProjectBackend() {
  return (
    <CardGroup className="projectsBackend">
      <CardProject title='Estudo de Python' colorborder='dark' nameLink1='GitHub' link1="https://github.com/samuelmaxi/estudos-python" description='Aprendi a dominar os fundamentos e aprofundar meus conhecimentos em Python, organizando e compartilhando meu aprendizado por meio de um repositório no GitHub.' simbol={<SiPython size={25} />} simbol2={<SiGithub size={35} style={{ paddingLeft: '10px' }} />} />
      <CardProject title='Gerador de número de telefone em Python' colorborder='dark' nameLink1='GitHub' link1="https://github.com/samuelmaxi/gerador-de-numeros-de-telefone" description=' Através desse projeto, adquiri habilidades em manipulação de strings e geração de dados aleatórios, aprimorando minha compreensão da linguagem Python.' simbol={<SiPython size={25} />} simbol2={<SiGithub size={35} style={{ paddingLeft: '10px' }} />} />
      <CardProject title='Projeto em Django' colorborder='dark' description='Desenvolvendo esse projeto em Django, aprofundei meus conhecimentos em desenvolvimento web, modelagem de banco de dados e integração de funcionalidades em uma aplicação prática de gerenciamento de estoque.' nameLink1='GitHub' link1={'https://github.com/samuelmaxi/nassau-desenvolvimento-web'} simbol={<SiPython size={25} />} simbol2={<SiGithub size={35} style={{ paddingLeft: '10px' }} />} simbol3={<SiDjango size={35} style={{ paddingLeft: '10px' }} />} />
    </CardGroup>
  );
}
function CardGropProjectFrontend() {
  return (
    <CardGroup className="projectsFrontend">
      <CardProject title='Estudo de React' colorborder='dark' description=' Desenvolvi um portfólio responsivo usando React.js, Next.js e Bootstrap. Aprendi a criar uma interface dinâmica e interativa, aproveitando componentes do React Bootstrap. Além disso, adquiri habilidades em personalização de estilos com Sass.' nameLink1='GitHub' nameLink2='Minha Página' link2='https://samuelmaxi.github.io/my-portfolio' link1="https://github.com/samuelmaxi/my-portfolio" simbol={<SiPython size={25} />} simbol2={<SiGithub size={35} style={{ paddingLeft: '10px' }} />} />
      <CardProject title='Em Breve' colorborder='danger' description='Em progresso para novos conhecimentos' simbol={'-'} simbol2={'-'} style={{ paddingLeft: '10px' }} />
      <CardProject title='Em Breve' colorborder='danger' description='Em progresso para novos conhecimentos' simbol={'-'} simbol2={'-'} style={{ paddingLeft: '10px' }} />
    </CardGroup>
  );
}


export function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projetos</h1>
      <Carousel slide={false}>
        <Carousel.Item>
          <h2>Back-end</h2>
          <CardGropProjectBackend />
        </Carousel.Item>
        <Carousel.Item>
          <h2>Front-end</h2>
          <CardGropProjectFrontend />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}