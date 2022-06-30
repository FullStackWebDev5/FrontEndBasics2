import { useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import "./NewsList.css";
import { Link } from "react-router-dom";
import { fetchNews } from "../../redux/news/action";
import { useDispatch, useSelector } from "react-redux";

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { newsList, loading, error } = news;

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {loading ? (
          <div className="spinner-wrapper">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        ) : error ? (
          <Alert variant="danger" className="error-alert">{error}</Alert>
        ) : (
          newsList.map((singleNews, index) => (
            <Col md={4} key={index} className="single-news">
              <Card className="text-center">
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
                    {singleNews.description &&
                    singleNews.description.length > 180
                      ? `${singleNews.description.slice(0, 180)}...`
                      : singleNews.description}
                  </Card.Text>
                  <Link className="btn btn-dark" to={`/news/${index}`}>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default NewsList;
