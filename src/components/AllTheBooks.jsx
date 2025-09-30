import { Component } from "react";
import { Card, Col, Row, Container, Form } from "react-bootstrap";

import horrorBooks from "../data/Horror.json";
import historicBooks from "../data/History.json";
import scifiBooks from "../data/Scifi.json";
import romanceBooks from "../data/Romance.json";
import fantasyBooks from "../data/fantasy.json";

class AllTheBooks extends Component {
  state = {
    selectedGenre: "Fantasy",
  };

  handleChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  };

  render() {
    //associa genere all'array di libri
    const booksByGenre = {
      Horror: horrorBooks,
      History: historicBooks,
      Scifi: scifiBooks,
      Romance: romanceBooks,
      Fantasy: fantasyBooks,
    };

    const books = booksByGenre[this.state.selectedGenre];

    return (
      <Container className=" mt-4 text-center d-flex flex-column align-items-center">
        {/* Select per cambiare il genere */}
        <Form.Select value={this.state.selectedGenre} onChange={this.handleChange} className="mb-4 transparent-card  text-white text-center bg-black w-25">
          {Object.keys(booksByGenre).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </Form.Select>

        <Row className="g-4">
          {books.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <Card className="h-100 d-flex flex-column transparent-card rounded">
                <Card.Img variant="top" className="myimgcard" src={book.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mt-auto">{book.title}</Card.Title>
                  <Card.Text className="mt-auto">€ {book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
