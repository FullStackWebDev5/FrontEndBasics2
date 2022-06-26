import { Row, Col, Card, Spinner, Button, Badge } from "react-bootstrap";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment, FaUserCircle } from "react-icons/fa";

const Posts = ({ posts, setPosts }) => {
  const toggleLikeCount = (postId) => {
    let updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        if (post.isLikedByCurrentUser) {
          post.likeCount = post.likeCount - 1;
          post.isLikedByCurrentUser = false;
        } else {
          post.likeCount = post.likeCount + 1;
          post.isLikedByCurrentUser = true;
        }
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  const incrementCommentCount = (postId) => {
    let updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        post.commentCount = post.commentCount + 1;
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <Col md={6}>
      <Row>
        {posts.length ? (
          posts.map((post) => (
            <Col key={post.id} md={12} className="single-photo">
              <Card>
                <Card.Header className="post-header">
                  <div>
                    <FaUserCircle /> {post.author}
                  </div>
                  <p className="post-time">{post.time}</p>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={post.download_url}
                  className="photo-img"
                />
                <Card.Body>
                  <p className="lead">{post.text}</p>
                  <div className="action-btn-outer">
                    <Button
                      variant="light"
                      onClick={() => toggleLikeCount(post.id)}
                    >
                      {post.isLikedByCurrentUser ? (
                        <AiFillLike />
                      ) : (
                        <AiOutlineLike />
                      )}{" "}
                      <Badge pill bg="dark">
                        {post.likeCount}
                      </Badge>
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => incrementCommentCount(post.id)}
                    >
                      <FaRegComment />{" "}
                      <Badge pill bg="dark">
                        {post.commentCount}
                      </Badge>
                    </Button>
                  </div>
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
    </Col>
  );
};

export default Posts;
