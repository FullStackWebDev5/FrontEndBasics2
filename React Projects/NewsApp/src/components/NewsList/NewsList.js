import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./NewsList.css";

const NewsList = ({ newsList }) => {
  return (
    <Container>
      <Row>
        {newsList && newsList.map((singleNews, index) => (
          <Col md={4} key={index} className="single-news">
            <Card>
              <Card.Img
                variant="top"
                src={
                  singleNews.urlToImage
                    ? singleNews.urlToImage
                    : "https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
                }
                alt="single-news"
              />
              <Card.Body>
                <Card.Title>
                  {singleNews.title && singleNews.title.length > 100
                    ? `${singleNews.title.slice(0, 100)}...`
                    : singleNews.title}
                </Card.Title>
                <Card.Text>
                  {singleNews.description && singleNews.description.length > 180
                    ? `${singleNews.description.slice(0, 180)}...`
                    : singleNews.description}
                </Card.Text>
                <Button variant="dark">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
