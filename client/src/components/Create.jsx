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
const Input = styled.input`
`;
const CreateButton = styled.button`
  background-color: #f4094f;
`;
const ImgPreview = styled.img`
  width: 50rem;
  height: auto;
`;

export const Create = () => {
  const [link, setLink] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username: ", username);
    axios
      .post("http://localhost:8000/api/post", {
        username: username,
        link: link,
        description: description
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
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Add your name!"
          ></Input>
          <Input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            placeholder="Add your link!"
          ></Input>
          <Input
          type="text"
          onChange={(e)=> setDescription(e.target.value)} 
          placeholder="Add your description!" ></Input>
          <CreateButton type="submit">Create</CreateButton>
        </CreateForm>
      </Wrapper>
    </Container>
  );
};
