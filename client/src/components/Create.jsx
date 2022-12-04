import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-self: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
const CreateForm = styled.form`
display: flex;
flex-direction: column;
width: 5rem;
`
const LinkInput = styled.input`
`
const ImgPreview = styled.img`
  width: 50rem;
  height: auto;
`

export const Create = () => {
  const [file, setFile] = useState();

  const handleChange = (e)=>{
    console.log(e.target.value)
    setFile(e.target.value)
  }

  return (
    <Container>
      <Wrapper>
        <ImgPreview src={file} />
        <CreateForm>
          <LinkInput type="text" onChange={handleChange}></LinkInput>
        </CreateForm>
      </Wrapper>
    </Container>
  )
}
