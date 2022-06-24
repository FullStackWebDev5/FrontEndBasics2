import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Button,
  Badge,
} from "react-bootstrap";
import "./Posts.css";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaUserCircle } from "react-icons/fa";
import dummyPostText from '../../assets/dummyPostText.json';
import dummyPostTime from '../../assets/dummyPostTime.json';

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        setPhotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotos();
  }, []);

  return (
    <Container className="posts-container">
      <Row>
        {photos.length ? (
          photos.map((photo) => (
            <Col key={photo.id} md={12} className="single-photo">
              <Card>
                <Card.Header className="post-header">
									<div>
										<FaUserCircle /> {photo.author}
									</div>
									<p className="post-time">{dummyPostTime[Math.ceil(Math.random()*5)]}</p>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={photo.download_url}
                  className="photo-img"
                />
                <Card.Body>
									<p className="lead">
										{dummyPostText[Math.ceil(Math.random()*3)]}
									</p>
                  <Row>
                    <Col md={{ span: 7, offset: 5 }} className='action-btn-outer'>
                      <Button variant="light">
                        <AiOutlineLike />{" "}
                        <Badge pill bg="dark">
                          351
                        </Badge>
                      </Button>
                      <Button variant="light">
                        <FaRegComment />{" "}
                        <Badge pill bg="dark">
                          56
                        </Badge>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="spinner-wrapper">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Photo;

// axios.get('https://picsu.photos/v2/list')
// 	.then(res => console.log(res.data))
// 	.catch(err => console.log(err))
