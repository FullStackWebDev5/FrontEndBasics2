import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NewsList.css";

function NewsList({ news }) {
  return (
    <>
      <h1 className="display-4 page-heading">NewsList</h1>
      {news.map((singleNews, index) => (
        <Card className="text-center single-news" key={index}>
          <Card.Header>{singleNews.source.name}</Card.Header>
          <Card.Body>
            <Card.Title>{singleNews.title}</Card.Title>
            <Card.Text>{singleNews.content}</Card.Text>
            <Link
              className="btn btn-dark"
              variant="primary"
              to={`/news/${index}`}
            >
              Go somewhere
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">
            {singleNews.publishedAt}
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}

export default NewsList;
