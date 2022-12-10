import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Post = styled.div`
`
const PostImg = styled.img``;
const PostUsername = styled.div``
const PostDescription = styled.div``

const baseURL = "http://localhost:8000/api/post";

export const Feed = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  const createPosts = (posts) => {
    return posts.map((post) => 
      <Post>
        <PostImg src={post.link} />
        <PostUsername>Posted by {post.user_name ? post.user_name : "Undefined"}</PostUsername>
        <PostDescription>Desctiption: {post.description ? post.description : "Undefined"}</PostDescription>

      </Post>
    );
  };

  return (
    <Container>
      <Wrapper>{posts ? createPosts(posts) : "No Posts"}</Wrapper>
    </Container>
  );
};
