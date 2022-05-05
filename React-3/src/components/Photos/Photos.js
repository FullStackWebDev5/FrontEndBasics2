import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Photos.css";
import axios from "axios";

export class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      showAllPhotos: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) =>
        this.setState({
          photos: res.data,
        })
      )
      .catch((err) => console.log(err.message));

    // const fetchPhotos = async () => {
    //   try {
    //     let res = await axios.get("https://picsum.photos/v2/list");
    //     this.setState({
    //       photos: res.data,
    //     });
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // }

    // fetchPhotos()
  }

  showHidePhotos = () => {
    this.setState((prevState) => ({
      showAllPhotos: !prevState.showAllPhotos,
    }));
  };

  render() {
    let { photos, showAllPhotos } = this.state;
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col md={10}>
            <h1 className="display-4" style={{ textAlign: "left" }}>
              Photos
            </h1>
            <p className="lead" style={{ textAlign: "left" }}>
              Explore range of images from Unsplash
            </p>
          </Col>
          <Col md={2}>
            <Button variant="dark" size='lg' onClick={this.showHidePhotos}>
              {showAllPhotos ? 'Hide' : 'Show'} all photos
            </Button>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          {showAllPhotos &&
            photos.map((photo) => (
              <Col md={3} className="photos-card" key={photo.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={photo.download_url} />
                  <Card.Body>
                    <Card.Title>{photo.author}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <a className="btn btn-dark" href={photo.url}>
                      View more details
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Photos;
