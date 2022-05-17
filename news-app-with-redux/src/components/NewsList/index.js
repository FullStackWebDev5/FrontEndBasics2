import { Row, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";

function NewsList({ news }) {
  return (
    <>
      <h1 className="display-4 page-heading">NewsList</h1>
      <Row>
        {news.length ? (
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
                <Link
                  className="btn btn-dark"
                  variant="primary"
                  to={`/news/${index}`}
                >
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
          <Spinner animation="border" style={{ margin: 'auto' }} />
        )}
      </Row>
    </>
  );
}

export default NewsList;
