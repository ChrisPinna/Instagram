import axios from 'axios'
import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-self: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`
const CreateForm = styled.form`
display: flex;
flex-direction: column;
height: 20rem;
width: 30rem;
`
const LinkInput = styled.input`
width: 20 rem;
margin: 1rem;
`
const CreateButton = styled.button`
  background-color: #f4094f;
  margin: 1rem;

`
const ImgPreview = styled.img`
  width: 50rem;
  height: auto;
  margin: 1rem;

`

export const Create = () => {
  const [link, setLink] = useState();

  const handleChange = (e)=>{
    console.log(e.target.value)
    setLink(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/post", {link: link} ).then((res) => {
      console.log(res.data.message);
    });
  }

  return (
    <Container>
      <Wrapper>
        <h1>Create a Post!</h1>
        <ImgPreview src={link} />
        <CreateForm onSubmit={handleSubmit}>
          <LinkInput type="text" onChange={handleChange} placeholder="Add you link"></LinkInput>
          <CreateButton type='submit'>Create</CreateButton>
        </CreateForm>
      </Wrapper>
    </Container>
  )
}
