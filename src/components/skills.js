import { CardGroup, Carousel, CarouselItem, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import '@/assets/styles/skills.scss'
import Form from 'react-bootstrap/Form';


function LiguageCards(props) {
  return (
    <Row xs={2} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '18rem' }} bg={props.colorborder}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.decription}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      ))}
    </Row>

  );
};

function CardProjectFrontEnd() {
  return (
    <CardGroup className="skills">
      <LiguageCards colorborder='dark' name='HTML' decription='No estudo do HTML, aprendi a estruturar corretamente as páginas web, utilizando as tags semânticas para fornecer significado ao conteúdo. Essa estruturação adequada melhora a acessibilidade e a indexação nos mecanismos de busca, resultando em páginas mais bem otimizadas e bem construída com suas semânticas.
'/>
      <LiguageCards colorborder='dark' name='CSS' decription='Estudar CSS me permitiu estilizar elementos HTML de maneira precisa e personalizada. Definir cores, fontes e layouts complexos utilizando técnicas avançadas como Flexbox e Grid possibilitou a criação de designs modernos e atrativos. A habilidade de trabalhar com CSS é fundamental para trazer vida e estilo às páginas web.
'/>
      <LiguageCards colorborder='dark' name='JavaScript' decription='Através do estudo aprofundado de JavaScript, adquiri habilidades para adicionar interatividade às páginas web. Manipulando o DOM, respondendo a eventos e realizando requisições assíncronas, fui capaz de criar experiências ricas e dinâmicas para os usuários. A versatilidade do JavaScript permite a criação de diversas funcionalidades.' />

      <LiguageCards colorborder='dark' name='Responsividade' decription='Ao aprofundar-me no estudo da responsividade, aprendi a importância de criar designs que se adaptem a diferentes dispositivos. Utilizando media queries e layouts flexíveis, consegui garantir que meus projetos proporcionem uma experiência consistente e agradável em qualquer tamanho de tela.' />

      <LiguageCards colorborder='dark' name='React' decription='Ao estudar React, mergulhei no desenvolvimento de componentes reutilizáveis e interativos. Com a capacidade de atualizar somente as partes necessárias da interface através do Virtual DOM, pude otimizar o desempenho das aplicações. A modularidade do React também facilitou a escalabilidade e a manutenção dos projetos.' />

      <LiguageCards colorborder='dark' name='Bootstrap' decription='Durante meus estudos em Bootstrap, aprofundei-me no uso de classes CSS pré-definidas e componentes para criar interfaces web responsivas. Com a flexibilidade e agilidade fornecidas pelo Bootstrap, pude desenvolver layouts consistentes e atrativos para  economizar tempo no processo de desenvolvimento.' />

      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

    </CardGroup>
  );
}

function CardProjectBackEnd() {
  return (
    <CardGroup className="skills">
      <LiguageCards colorborder='dark' name='Python' decription='Estudei Python por meio de práticas e teoria. Aprendi a criar aplicações eficientes e de fácil manutenção, explorando sua sintaxe elegante e vasta biblioteca. Como programador, busquei aprimorar minhas habilidades resolvendo desafios simples e construindo pequenos projetos para ganhar experiência prática.
'/>
      <LiguageCards colorborder='dark' name='MySQL' decription='Estudei MySQL por meio de práticas e teoria. Aprendi a projetar e gerenciar bancos de dados relacionais, realizando consultas eficientes e manipulando dados com segurança. Pratiquei principalmente na faculdade onde participei do desenvolvimento de sistemas simples que utilizam MySQL.
'/>
      <LiguageCards colorborder='dark' name='Git/GitHub' decription='Estudei Git/GitHub por meio de práticas e teoria. Estou cada vez mais aprendendo a versionar meu código, colaborar em projetos em equipe e gerenciar eficientemente mudanças e ramificações. Utilizei o Git/GitHub para compartilhar meu próprio código com a comunidade.' />

      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

    </CardGroup>
  );
}

function CardProjectDesign() {
  return (
    <CardGroup className="skills">
      <LiguageCards colorborder='dark' name='Figma' decription='Estudei Figma por meio de, muita práticas.  Aprendi a criar interfaces de usuário intuitivas e funcionais e produzir protótipos interativos. Utilizei o Figma para compreender as necessidades do usuário, planejar a arquitetura da informação e melhorar a visualização do projeto como um todo.
'/>
      <LiguageCards colorborder='dark' name='Adobe Photoshop' decription='Estudei Adobe Photoshop por meio de práticas e desafios pessoais. Aprendi a editar, criar composições visuais atrativas e customizar layouts. Utilizei o Photoshop para criar principalmente wireframes, assets visuais personalizados, como ícones e banners, e para aprimorar a aparência geral das interfaces de usuário.
'/>
      <LiguageCards colorborder='dark' name='Adobe Illustrator' decription='Estudei a criação de layouts e assets com Canvas por meio de práticas e teoria. Aprendi a utilizar a criar animações interativas diretamente no navegador. Como programador, explorei o potencial do Canvas para criar elementos de layouts dinâmicos e engajantes em aplicações web.' />
      <LiguageCards colorborder='dark' name='WireFrame' decription='Estudei a criação de wireframes por meio de práticas e teoria. Aprendi a esboçar esquemas estruturais de interfaces de usuário, mapeando fluxos de navegação e organizando o conteúdo de forma clara e lógica. Utilizo wireframes para comunicar minhas ideias e planejar a usabilidade das aplicações.' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

    </CardGroup>
  );
}

function CardProjectOffLine() {
  return (
    <CardGroup className="skills">
      <LiguageCards colorborder='dark' name='Rápida Aprendizagem' decription='Demonstro habilidade em aprender rapidamente novos conceitos e tecnologias, adaptando-me facilmente a diferentes desafios e ambientes. Estou sempre em busca de conhecimento e me atualizo constantemente para oferecer soluções eficientes.
'/>
      <LiguageCards colorborder='dark' name='Responsabilidade' decription='Tenho um senso de responsabilidade forte e cumpro prazos com comprometimento. Assumo a responsabilidade pelos meus projetos e entrego resultados de qualidade, mantendo a organização e a eficiência em todas as tarefas.
'/>
      <LiguageCards colorborder='dark' name='Trabalho em Grupo' decription='Tenho experiência em colaborar de forma eficaz com grupos como na faculdade, procuro me comunicar de maneira clara e contribuindo para alcançar objetivos comuns. Valorizo a diversidade de ideias e respeito a opinião de todos os membros da equipe.' />

      <LiguageCards colorborder='dark' name='Comprometimento' decription='Sou dedicado e comprometido em oferecer o meu melhor em cada projeto. Demonstro persistência, resiliência e estou sempre disposto a ir além para alcançar resultados excepcionais, tanto individualmente quanto em equipe.' />

      <LiguageCards colorborder='dark' name='Criatividade' decription='Tenho uma mente criativa e busco soluções inovadoras para os desafios que encontro. Sou capaz de pensar fora da caixa, trazendo novas perspectivas e abordagens para projetos, contribuindo para uma experiência única e impactante para os usuários.' />

      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />
      <LiguageCards colorborder='danger' name='EM BREVE' decription='Em progresso para novos conhecimentos' />

    </CardGroup>
  );
}


export function Skills(props) {
  return (
    <section className="skills" id="skills">
      <h1>Habilidades e Competências</h1>
      <Carousel >
        <Carousel.Item >
          <h2>Front-End</h2>
          <section className="first-line">
            <CardProjectFrontEnd />
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Back-End</h2>
          <section className="first-line">
            <CardProjectBackEnd />
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Design</h2>
          <section className="first-line">
            <CardProjectDesign />
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Soft Skills</h2>
          <section className="first-line">
            <CardProjectOffLine />
          </section>
        </Carousel.Item>
      </Carousel>
    </section>

  );
}

// <section className="btn-radio">
//         <CheckInline />
//       </section>