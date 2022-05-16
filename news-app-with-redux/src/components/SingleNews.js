import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./NewsList/index.css";
import moment from "moment";

function SingleNews({ news }) {
  const { index } = useParams();
  const singleNews = news[index];
  return (
		<Card className="text-center single-news">
			<Card.Header>{singleNews.source.name}</Card.Header>
			<Card.Body>
				<Card.Title>{singleNews.title}</Card.Title>
				<Card.Text>{singleNews.content}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				{moment(singleNews.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
			</Card.Footer>
		</Card>
  );
}

export default SingleNews;
