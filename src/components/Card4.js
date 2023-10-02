import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Carte4() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.thesun.co.uk/wp-content/uploads/2022/12/kylian-mbappe-france-poses-official-780833939-1.jpg"
      />
      <Card.Body>
        <Card.Title> Kylian Mbappé</Card.Title>
        <Card.Text>
          Regarded as one of the best players in the world, he is renowned for
          his dribbling abilities, exceptional speed, and finishing.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age : 24 (1998)</ListGroup.Item>
        <ListGroup.Item>Country : France</ListGroup.Item>
        <ListGroup.Item>Team : Paris Saint-Germain </ListGroup.Item>
        <ListGroup.Item> Jersey Number : 7 </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9">
          wikipedia
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Carte4;
