import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import '@/assets/styles/skills.scss'
import Form from 'react-bootstrap/Form';

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

function LiguageCards(props) {
  return (
    <Card border="primary" style={{ width: '18rem', borderRadius:'10px' }} bg="dark">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.decription}
        </Card.Text>
      </Card.Body>
    </Card>



    // <Card>
    //   <Card.Img variant="top" src={props.img} />
    //   <Card.Body>
    //     <Card.Title>{props.name}</Card.Title>
    //     <Card.Text>
    //       {props.decription}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
  );
}


function CardProject() {
  return (
    <CardGroup className="skills">
      <LiguageCards img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' name='React' decription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, velit eaque corrupti laudantium laboriosam sequi excepturi obcaecati a incidunt veritatis repellendus itaque sint! Perferendis dolores voluptas, quae repellat quidem laboriosam?
'/>
      <LiguageCards img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' name='React' decription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, velit eaque corrupti laudantium laboriosam sequi excepturi obcaecati a incidunt veritatis repellendus itaque sint! Perferendis dolores voluptas, quae repellat quidem laboriosam?
'/>
      <LiguageCards img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' name='React' decription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, velit eaque corrupti laudantium laboriosam sequi excepturi obcaecati a incidunt veritatis repellendus itaque sint! Perferendis dolores voluptas, quae repellat quidem laboriosam?
'/>

    </CardGroup>
  );
}


export function Skills(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <section className="first-line">
        <CardProject style={{}}/>
      </section>
      <section className="second-line">
        <CardProject />
      </section>
      <CheckInline />
    </>

  );
}
