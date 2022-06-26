import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "./Home.css";
import dummyPostText from "../../assets/dummyPostText.json";
import dummyPostTime from "../../assets/dummyPostTime.json";
import Posts from "./Posts";
import MemberActiveStatusList from "./MemberActiveStatusList";
import ChatList from "./ChatList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        let resPosts = [...res.data];
        let postsWithAdditionalDetails = resPosts.map((post) => {
          let likeCount = Math.ceil(Math.random() * 1000);
          let isLikedByCurrentUser = false;
          let commentCount = Math.ceil(Math.random() * 10);
          let time = dummyPostTime[Math.ceil(Math.random() * 5)];
          let text = dummyPostText[Math.ceil(Math.random() * 3)];

          return {
            ...post,
            likeCount,
            isLikedByCurrentUser,
            commentCount,
            time,
            text,
          };
        });
        setPosts(postsWithAdditionalDetails);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotos();
  }, []);

  let randomChatList = posts.filter((post) => Number(post.id) % 5 === 0);

  return (
    <Container className="posts-container">
      <Row>
        <MemberActiveStatusList posts={posts} />
        <Posts posts={posts} setPosts={setPosts} />
        <ChatList posts={randomChatList} />
      </Row>
    </Container>
  );
};

export default Home;

// axios.get('https://picsu.photos/v2/list')
// 	.then(res => console.log(res.data))
// 	.catch(err => console.log(err))
