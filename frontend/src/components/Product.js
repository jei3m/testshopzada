import React from "react";
import { Container, Card, Button, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

//style={{height:200, width:250}}

function Product({ product }) {
  return (
    <Container>
    <Card className="my-3 p-3 rounded">
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />{" "}
          </div>
        </Card.Text>
        <h5>
        <Card.Text > P {product.price}</Card.Text>
        </h5>
        <Link to={`product/${product._id}`}>
        </Link>
        <Link to={`product/${product._id}`}>
        <Row><Button><i class="fas fa-shopping-cart"></i>  ORDER</Button></Row>
    </Link>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default Product;
