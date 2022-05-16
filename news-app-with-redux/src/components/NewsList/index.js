import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";

function NewsList({ news }) {
  return (
    <>
      <h1 className="display-4 page-heading">NewsList</h1>
      {news.map((singleNews, index) => (
        <Card className="text-center single-news" key={index}>
          <Card.Header>{singleNews.source.name}</Card.Header>
          <Card.Body>
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
            {moment(singleNews.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}

export default NewsList;
