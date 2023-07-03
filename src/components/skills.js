import { CardGroup, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import '@/assets/styles/skills.scss'
import Form from 'react-bootstrap/Form';
import Reacticon from '@/assets/img/React-icon.png'


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


function CheckInline() {
  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />

        </div>
      ))}
    </Form>
  );
}

function CardProject() {
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


export function Skills(props) {
  return (
    <section className="skills">
      <h1>Habilidades e Competências</h1>
      <h2>{props.title}</h2>
      <section className="first-line">
        <CardProject />
      </section>
      <section className="btn-radio">
        <CheckInline />
      </section>
    </section>

  );
}
