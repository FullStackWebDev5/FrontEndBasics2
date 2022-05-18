import { useEffect, useState } from "react";
import { Row, Col, Card, Spinner, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../redux";

const NewsList = () => {
  const [country, setCountry] = useState("in");
  const state = useSelector((state) => state);
  const { news, loading, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews(country));
  }, [dispatch, country]);

  return (
    <>
      <Row className="mt-2 mb-2">
        <h1
          className="display-4 page-heading col-md-3 col-xs-12"
          style={{ textAlign: "left" }}
        >
          NewsList
        </h1>
        <Col md={6} xs={12} className="header-items">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search news"
            onKeyUp={(e) => dispatch(fetchNews(country, e.target.value))}
          />
        </Col>
        <Col md={3} xs={12} className="header-items">
          <Form.Select
            id="countrySelection"
            className="col-md-4"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected value="in">
              India
            </option>
            <option value="us">US</option>
            <option value="ca">Canada</option>
            <option value="ae">UAE</option>
            <option value="ru">Russia</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {!loading ? (
          !error ? (
            news.map((singleNews, index) => (
              <Card
                className="text-center single-news col-md-4 col-xs-12"
                key={index}
              >
                <Card.Header>{singleNews.source.name}</Card.Header>
                <Card.Img
                  variant="top"
                  src={
                    singleNews.urlToImage
                      ? singleNews.urlToImage
                      : "https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
                  }
                  style={{ height: "235px" }}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Card.Title>{singleNews.title}</Card.Title>
                  <Card.Text>{singleNews.description}</Card.Text>
                  <Link className="btn btn-dark" to={`/news/${index}`}>
                    Read more
                  </Link>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {moment(singleNews.publishedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </Card.Footer>
              </Card>
            ))
          ) : (
            <div style={{ margin: "auto" }}>
              Failed to load news, please try again after some time
            </div>
          )
        ) : (
          <Spinner animation="border" style={{ margin: "auto" }} />
        )}
      </Row>
    </>
  );
};

export default NewsList;

/*
	Pagination Logic
	Total records - 124

	offset - 0
	limit - 20

	offset - 20
	limit - 20

	offset - 40
	limit - 20
*/
