import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Post = styled.img``;

const baseURL = "http://localhost:8000/api/post";

export const Feed = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  const createPosts = (posts) => {
    return posts.map((post) => <Post src={post.link} />);
  };

  return (
    <Container>
      <Wrapper>{posts ? createPosts(posts) : "No Posts"}</Wrapper>
    </Container>
  );
};
