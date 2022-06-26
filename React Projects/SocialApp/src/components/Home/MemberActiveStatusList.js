import { Col, Badge, ListGroup } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const MemberActiveStatusList = ({ posts }) => {
  return (
    <Col md={3}>
      <ListGroup as="ul">
        {posts.map((post) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start member-list-item"
            key={post.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <FaUserCircle /> {post.author}
              </div>
            </div>
            <Badge bg="success" pill>
              Active
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default MemberActiveStatusList;
