import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-self: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 30rem;
`;
const LinkInput = styled.input`
  width: 20 rem;
`;
const CreateButton = styled.button`
  background-color: #f4094f;
`;
const ImgPreview = styled.img`
  width: 50rem;
  height: auto;
`;
const UsernameInput = styled.input``;

export const Create = () => {
  const [link, setLink] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username: ", username);
    axios
      .post("http://localhost:8000/api/post", {
        username: username,
        link: link,
      })
      .then((res) => {
        console.log(res.data.message);
      });
  };

  return (
    <Container>
      <Wrapper>
        <h1>Create a Post!</h1>
        <ImgPreview src={link} />
        <CreateForm onSubmit={handleSubmit}>
          <UsernameInput
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Add you name!"
          ></UsernameInput>
          <LinkInput
            type="text"
            onChange={(e) => setLink(e.target.value)}
            placeholder="Add you link!"
          ></LinkInput>
          <CreateButton type="submit">Create</CreateButton>
        </CreateForm>
      </Wrapper>
    </Container>
  );
};
