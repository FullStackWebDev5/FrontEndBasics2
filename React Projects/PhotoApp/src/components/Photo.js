import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Photo.css'

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
    	try {
    		const res = await axios.get('https://picsum.photos/v2/list')
    		setPhotos(res.data)
    	} catch (err) {
    		console.log(err)
    	}
    }
    getPhotos()
  }, []);

  return (
    <Container>
      <Row>
        {photos.map((photo) => (
          <Col key={photo.id} md={3} className='single-photo'>
            <Card>
              <Card.Header>{photo.author}</Card.Header>
              <Card.Img variant="top" src={photo.download_url} />
              <Card.Body>
                <Button variant="primary">View Source</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Photo;


// axios.get('https://picsu.photos/v2/list')
// 	.then(res => console.log(res.data))
// 	.catch(err => console.log(err))