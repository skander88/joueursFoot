import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../App.css";
const Player = ({ imgUrl, name, age, country, team, jn, wiki }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} className="photo" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age : {age} </ListGroup.Item>
        <ListGroup.Item>Country : {country} </ListGroup.Item>
        <ListGroup.Item>Team : {team} </ListGroup.Item>
        <ListGroup.Item> Jersey Number : {jn} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={wiki}>More Informations : </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Player;
