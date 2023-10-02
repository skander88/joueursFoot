import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Carte() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://lh3.googleusercontent.com/JgSkw62CrtdgBsNl5L-3jW7vtCTx30V8yxQCytGK2qYPfYOaJV5qh_yiW-8zY8KI2gQ6C6-OORTflXhwnVQ8QyA8x37KMTpOCItGdQ=w1500-h1000-p-e365"
      />
      <Card.Body>
        <Card.Title>Cristiano Ronaldo</Card.Title>
        <Card.Text>
          Widely regarded as one of the greatest players of all time, Ronaldo
          has won five Ballon d'Or awards, a record three UEFA Best Player in
          Europe, and four European Golden Shoes, the most by a European player.
          He has won 33 trophies in his career, including seven league titles,
          five UEFA Champions Leagues, the UEFA European Championship and the
          UEFA Nations League. Ronaldo holds the records for most appearances
          (183), goals (140) and assists (42) in the Champions League, goals in
          the European Championship (14), international goals (123) and
          international appearances (201). He is one of the few players to have
          made over 1,100 professional career appearances, and has scored over
          850 official senior career goals for club and country, making him the
          highest goalscorer of all time.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age : 38 (1985)</ListGroup.Item>
        <ListGroup.Item>Country : Portugal</ListGroup.Item>
        <ListGroup.Item>Team : Al nassr </ListGroup.Item>
        <ListGroup.Item> Jersey Number : 7 </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://fr.wikipedia.org/wiki/Cristiano_Ronaldo">
          wikipedia
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Carte;
